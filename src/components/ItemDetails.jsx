import React from "react";
import { useContext } from "react";
import ItemCount from "./ItemCount";
import { MyCartContext } from "../context/CartContext";

const ItemDetails = ({ product }) => {
	const { addToCart } = useContext(MyCartContext);
	// Verifica si el producto es nulo o indefinido
	if (!product) {
		return <div>Producto no encontrado...</div>;
	}
	const handleAddToCart = () => {
		addToCart({
			id: product.id,
			title: product.title,
			picture: product.picture,
			price: product.price,
			stock: product.stock || 10, // Aquí asegúrate de que tenga un valor válido
			quantity: 1, // Establece la cantidad inicial como 1
		});
	};
	return (
		<div className="item-details">
			<h2 className="item-details__title">{product.title}</h2>
			<img className="item-details__image" src={product.picture} alt={product.title} />
			<p className="item-details__description">{product.description}</p>
			<p className="item-details__precio">Precio: ${product.price}</p>


			{/* Pasar propiedades del producto de manera dividida */}
			<ItemCount
				itemId={product.id}
				title={product.title}
				description={product.description}
				picture={product.picture}
				price={product.price}
				stock={10}
			/>
		</div>
	);
};

export default ItemDetails;