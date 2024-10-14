import React from "react";
import { useState } from "react";
import Item from "./item";

function ItemCount() {
	const [contador, setContador] = useState(0);

	const incrementar = () => {
		setContador(contador + 1);
	};
	const decrementar = () => {
		if (contador > 0) {
			setContador(contador - 1)

		}

	}
	return (
		<div className="item-details__count">
			<button onClick={decrementar}>-</button>
			<span>{contador}</span>
			<button onClick={incrementar}>+</button>
			<button className="item-details__btn">Agregar al Carrito</button>
		</div>
	)
}

export default ItemCount