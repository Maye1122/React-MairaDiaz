import React, { createContext, useState, useEffect } from "react";

// Creando el contexto
export const MyCartContext = createContext();

// Creando el proveedor
export const MyCartProvider = ({ children }) => {
	const [countCarrito, setCartcount] = useState(0);
	const [cartItems, setCartItems] = useState([]);

	//Clearcart
	const clearCart = () => {
		setCartItems([]);
		setCartcount(0);
	};

	// Calcula la cantidad total cada vez que cartItems cambia
	useEffect(() => {

		const totalQuantity = cartItems.reduce((acc, item) => acc + (Number(item.quantity) || 0), 0);
		setCartcount(totalQuantity);
	}, [cartItems]);

	//------🎆addToCart🎆-------
	const addToCart = (product) => {

		setCartItems((prevCartItems) => {

			const existingProductIndex = prevCartItems.findIndex(item => item.id === product.id);

			if (existingProductIndex !== -1) {

				const updateCart = prevCartItems.map((item, index) =>
					index === existingProductIndex
						? {
							...item,
							quantity: (Number(item.quantity) || 0) + (Number(product.quantity) || 1), stock: Number(item.stock) || Number(product.stock) || 0
						}
						: item
				);

				return updateCart



			} else {
				// Producto nuevo: inicializa con quantity y stock asegurando que ambos sean numéricos
				const newCart = [...prevCartItems, { ...product, quantity: Number(product.quantity) || 1, stock: Number(product.stock) || 0 }];

				return newCart
			}
		});
	};

	//------🎆increaseQuantity🎆-------

	const increaseQuantity = (itemId) => {
		setCartItems(prevCartItems =>
			prevCartItems.map(item =>
				item.id === itemId
					? {
						...item,
						quantity: Math.min(item.quantity + 1, item.stock) // Asegurarse de que no se exceda el stock
					}
					: item
			)
		);
	};



	//------🎆decreaseQuantity🎆-------
	const decreaseQuantity = (itemId) => {
		setCartItems(prevCartItems =>
			prevCartItems.map(item =>
				item.id === itemId && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	//------🎆removeFromCart🎆-------
	const removeFromCart = (id) => {
		setCartItems(prevCartItems =>
			prevCartItems.filter(item => item.id !== id)
		);
	};

	return (
		<MyCartContext.Provider value={{ countCarrito, addToCart, cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}>
			{children}
		</MyCartContext.Provider>
	);
};
