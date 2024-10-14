import React from "react";
import ItemCount from "./ItemCount";

const ItemDetails = ({ product }) => {
	// Verifica si el producto es nulo o indefinido
	if (!product) {
		return <div>Cargando detalles del producto o producto no encontrado...</div>;
	}

	return (
		<div className="item-details">
			<h2 className="item-details__title">{product.title}</h2>
			<img className="item-details__image" src={product.picture} alt={product.title} />
			<p className="item-details__description">{product.description}</p>
			<p className="item-details__precio">Precio: ${product.price}</p>
			<ItemCount />
		</div>
	);
};

export default ItemDetails;