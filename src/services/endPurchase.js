// src/services/endPurchase.js

import { doc, addDoc, collection, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const endPurchase = async (cartItems, buyerData) => {
	console.log("Contenido del carrito:", cartItems);
	console.log("Datos del comprador:", buyerData);
	if (!cartItems || cartItems.length === 0) {
		console.error("El carrito está vacío o no fue pasado correctamente");
		return { success: false, message: "El carrito está vacío." };
	}

	if (!buyerData || !buyerData.name || !buyerData.lastName || !buyerData.email) {
		console.error("Datos del comprador incompletos");
		return { success: false, message: "Datos del comprador incompletos." };
	}

	const productsToUpdateRefs = cartItems.map(cartProduct => ({
		ref: doc(db, "products", cartProduct.id),
		id: cartProduct.id,
		quantity: cartProduct.quantity
	}));

	const orderCollectionRef = collection(db, "orders");

	try {
		const result = await runTransaction(db, async (transaction) => {
			const stockUpdated = [];

			// 1. Verificar el stock de cada producto
			for (const productToUpdate of productsToUpdateRefs) {
				const { ref, id, quantity } = productToUpdate;
				const productDoc = await transaction.get(ref);

				if (!productDoc.exists()) {
					throw new Error(`Producto con ID ${id} no existe`);
				}

				const currentStock = productDoc.data().stock;
				const newStock = currentStock - quantity;

				if (newStock < 0) {
					throw new Error(`Producto: ${productDoc.data().title} no tiene suficiente stock. Stock actual: ${currentStock}, Cantidad solicitada: ${quantity}`);
				}

				stockUpdated.push({ ref, newStock });
			}

			// 2. Actualizar el stock de los productos
			for (const { ref, newStock } of stockUpdated) {
				transaction.update(ref, { stock: newStock });
			}

			// 3. Crear la orden
			const newOrder = {
				buyer: {
					name: buyerData.name,
					lastName: buyerData.lastName,
					email: buyerData.email
				},
				products: cartItems.map(item => ({
					id: item.id,
					title: item.title,
					price: Number(item.price),
					quantity: Number(item.quantity),
					subtotal: Number(item.price) * Number(item.quantity)
				})),
				total: cartItems.reduce((acc, item) => acc + (Number(item.price) * Number(item.quantity)), 0),
				timestamp: serverTimestamp()
			};

			// Agregar la orden a la colección "orders"
			const orderRef = await addDoc(orderCollectionRef, newOrder);
			console.log("Orden creada con ID:", orderRef.id);

			// Aquí es donde colocas el return
			return { success: true, order: newOrder, orderId: orderRef.id };
		});

		console.log("Transacción exitosa:", result);
		return result;
	} catch (error) {
		console.error("Error al finalizar la compra:", error);
		return { success: false, message: error.message };
	}
};

export default endPurchase;
