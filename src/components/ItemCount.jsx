import React from "react";
import { useState } from "react";
import Item from "./item";

function ItemCount() {
	const [contador, setContador] = useState(0);

	const incrementar = () => {
		setContador(contador + 1);
	};
	const decrementar = () => {
		setContador(contador - 1)
	}
	return (
		<div className="item-details">
			<button onClick={decrementar}>-</button>
			<span>{contador}</span>
			<button onClick={incrementar}>+</button>
			<button className="item-details__btn">Comprar</button>
		</div>
	)
}

export default ItemCount