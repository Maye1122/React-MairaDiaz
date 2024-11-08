

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MyCartContext } from "../context/CartContext"; // Importa el contexto

const Item = ({ product }) => { // Cambiado a 'product' para evitar confusiones
	const { addToCart } = useContext(MyCartContext); // Accede a la función addToCart

	return (
		<section className="item__article">
			<img src={product.picture} alt={product.title} className="item__image" />
			<h3>{product.title}</h3>
			<p>{product.description}</p>
			<br />
			<p>${product.price}</p>
			{/* <button onClick={() => addToCart({ ...product, quantity: 1 })}>
        Agregar al Carrito
      </button> */}
			<NavLink to={`/detail/${product.id}`}>
				<button className="item__btn">Detalle del producto</button>
			</NavLink>
		</section>
	);
};

export default Item;
