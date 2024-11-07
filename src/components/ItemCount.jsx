import React, { useState, useContext } from "react";
import { MyCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ itemId, title, picture, price, stock }) => {
	const [contador, setContador] = useState(1);
	const [addedToCart, setAddedToCart] = useState(false);
	const [warningMessage, setWarningmessage] = useState("");
	const { addToCart } = useContext(MyCartContext);

	// Función para incrementar la cantidad
	const incrementar = () => {
		if (contador < stock) {  // Solo incrementa si no supera el stock disponible
			setContador(contador + 1);
			setWarningmessage("");
		}
	};

	// Función para decrementar la cantidad
	const decrementar = () => {
		if (contador > 1) {  // Evita que baje a 0
			setContador(contador - 1);
			setWarningmessage("");
		}
	};

	// Función para manejar la adición al carrito
	const handleAddToCart = () => {

		if (contador > 0) {
			// Asegúrate de que estás pasando el producto correctamente
			addToCart({
				id: itemId,
				title: title,
				picture: picture,
				price: price,
				quantity: contador
			});
			setAddedToCart(true);
			setContador(1); // Reiniciar contador después de agregar al carrito
			setWarningmessage("");
		} else {
			setWarningmessage("Debes seleccionar al menos un artículo para agregar al carrito.")
		}
	};


	return (
		<div className="item-details__count">
			<button onClick={decrementar}>-</button>
			<span>{contador}</span>
			<button onClick={incrementar}>+</button>

			{/* {warningMessage && <div style={{ color: "red" }}>{warningMessage}</div>} */}
			{!addedToCart ? (
				<button className="item-details__btn" onClick={handleAddToCart}>Agregar al Carrito</button>
			) : (
				<>
					<Link to="/cart">
						<button className="item-details__btn">Ir al carrito</button>
						{/* <button className="item-details__btn" onClick={() => addToCart({ ...Item, quantity: 1 })}>
							Agregar al Carrito
						</button> */}
					</Link>
					<Link to="/">
						<button className="item-details__btn">Continuar comprando</button>
					</Link>
				</>
			)}
		</div>
	);
};

export default ItemCount;