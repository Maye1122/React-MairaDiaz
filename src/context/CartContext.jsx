import React from "react";
import { createContext, useState } from "react";

//creando el contexto
export const MyCartContext = createContext();

//Creando el proveedor

export const MyCartProvider = ({ children }) => {
	const [countCarrito, setCartcount] = useState(0);

	//funcion para agregar los elementos al carrito
	const [cartItems, SetCartItems] = useState([]);

	const addToCart = (product) => {
		const productosExistentes = cartItems.findIndex(item => item.id === product.id);
		if (productosExistentes !== -1) {
			const updateCartItems = cartItems.map((item, index) => index === productosExistentes ? { ...item, quantity: item.quantity + product.quantity } : item
			);
			SetCartItems(updateCartItems);
		} else {
			SetCartItems([...cartItems, product]);
		}
		setCartcount(countCarrito + product.quantity);
	};
	return (
		<MyCartContext.Provider value={{ countCarrito, addToCart, cartItems }}>
			{children}
		</MyCartContext.Provider>

	)

}