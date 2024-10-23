import React from "react";
import { useState, useContext } from "react";
import { MyCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ product }) => {
	const [contador, setContador] = useState(1);
	const [addedToCart, setAddedToCart] = useState(false);
	const { addToCart } = useContext(MyCartContext)

	const incrementar = () => {
		setContador(contador + 1);
	};
	const decrementar = () => {
		if (contador > 0) {
			setContador(contador - 1)

		}

	}
	const handleAddToCart = () => {
		if (contador > 0) {
			addToCart({ ...product, quantity: contador });
			setAddedToCart(true);
			setContador(1);
		}
	};

	return (
		<div className="item-details__count">
			<button onClick={decrementar}>-</button>
			<span>{contador}</span>
			<button onClick={incrementar}>+</button>


			{!addedToCart ? (
				<button className="item-details__btn" onClick={handleAddToCart}>Agregar al Carrito</button>

			) : (
				<><Link to="/cart" ><button className="item-details__btn">Ir al carrito</button></Link>
					<Link to="/" ><button className="item-details__btn">Continuar de compras</button></Link></>

			)}






		</div>
	)
}

export default ItemCount