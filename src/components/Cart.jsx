// src/components/Cart.jsx

import React, { useContext, useState } from "react";
import { MyCartContext } from "../context/CartContext";
import '../estilos/cartitem.scss';
import endPurchase from "../services/endPurchase";
import BuyerFormModal from "../components/BuyerForModal";


const Cart = () => {
	const { cartItems, removeFromCart, clearCart } = useContext(MyCartContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [orderDetails, setOrderDetails] = useState(null);

	console.log('cartItems:', cartItems); // Para depuración
	console.log('orderDetails:', orderDetails); // Para depuración

	// Verifica si el carrito está vacío y no hay orden
	if ((!cartItems || cartItems.length === 0) && !orderDetails) {
		return <h3>El carrito está vacío</h3>;
	}

	// Calcula el total solo si hay items en el carrito
	const total = cartItems && cartItems.reduce((acc, item) => {
		const price = Number(item.price) || 0;
		const quantity = Number(item.quantity) || 0;
		return acc + price * quantity;
	}, 0);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleBuyerSubmit = async (buyerData) => {
		const result = await endPurchase(cartItems, buyerData);

		console.log('Resultado de endPurchase:', result);

		if (result.success) {
			setOrderDetails({ ...result.order, id: result.orderId });
			console.log('orderDetails actualizado:', { ...result.order, id: result.orderId });
			clearCart();
			closeModal();
			alert("Compra realizada exitosamente. ¡Gracias por tu compra!");
		} else {
			alert(`Error al finalizar la compra: ${result.message}`);
		}
	};

	return (
		<div className="item-details">
			{orderDetails ? (
				// Mostrar detalles de la orden
				<div className="item-details__description" >
					<h3>Orden Realizada</h3>
					<p>ID de Orden: {orderDetails.id}</p>
					<p>Nombre: {orderDetails.buyer.name} {orderDetails.buyer.lastName}</p>
					<p>Email: {orderDetails.buyer.email}</p>
					<p>Total: ${orderDetails.total.toFixed(2)}</p>
					<h4>Productos:</h4>
					<ul>
						{orderDetails.products.map((product) => (
							<li key={product.id} className="cart-item">
								{product.title} - Cantidad: {product.quantity} - Subtotal: ${product.subtotal.toFixed(2)}
							</li>
						))}
					</ul>
				</div>
			) : (
				// Mostrar el carrito y el modal
				<>
					<ul>
						{cartItems.map((item) => {
							const price = Number(item.price) || 0;
							const quantity = Number(item.quantity) || 0;
							const subtotal = price * quantity;

							return (
								<li key={item.id} className="cart-item">
									<h3>{item.title}</h3>
									<p>Cantidad Seleccionada: {quantity}</p>
									<p>Precio Unidad: ${price}</p>
									<p>Subtotal: ${subtotal.toFixed(2)}</p>
									<button onClick={() => removeFromCart(item.id)} className="item__btn">Eliminar</button>
								</li>
							);
						})}
					</ul>
					<h4>Total: ${total.toFixed(2)}</h4>
					<button onClick={openModal} className="item__btn">Finalizar Compra</button>

					{/* Modal para el formulario del comprador */}
					<BuyerFormModal
						isOpen={isModalOpen}
						onRequestClose={closeModal}
						onSubmit={handleBuyerSubmit}
					/>
				</>
			)}
		</div>
	);
};

export default Cart;
