import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MyCartContext } from "../context/CartContext"; // Importa el contexto

const Item = ({ Item }) => {
	const { addToCart } = useContext(MyCartContext); // Accede a la función addToCart

	return (
		<section className="item__article">
			<img src={Item.picture} alt={Item.title} className="item__image" />
			<h3>{Item.title}</h3>
			<p>{Item.description}</p>
			<br />
			<p>${Item.price}</p>
			{/* <button onClick={() => addToCart({ ...Item, quantity: 1 })}>
				Agregar al Carrito
			</button> */}
			<NavLink to={`/detail/${Item.id}`}>
				<button className="item__btn">Detalle del producto</button>
			</NavLink>
		</section>
	);
};

export default Item;
