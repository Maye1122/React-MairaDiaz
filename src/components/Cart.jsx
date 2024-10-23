import React, { useContext } from "react";
import { MyCartContext } from "../context/CartContext";

const Cart = () => {
	const { cartItems } = useContext(MyCartContext);

	//  productos en el carrito
	if (!cartItems || cartItems.length === 0) {
		return <h3>El carrito está vacío</h3>;
	}

	const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<div className="item">
			<ul>
				{cartItems.map((item) => (
					<li key={item.id} className="cart-item">
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};



// Obtén el último producto agregado
{/* const lastProduct = cartItems.length > 0 ? cartItems[cartItems.length - 1] : null;
	if (!lastProduct) {
		return <h3>Eror al cargar</h3>
	}

}; */}

export default Cart;
