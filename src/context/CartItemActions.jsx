// import React from "react";
// import { useContext } from "react";
// import { MyCartContext } from "../context/CartContext";



// const CartItemActions = ({ itemId, quantity }) => {
// 	const { increaseQuantity, decreaseQuantity, cartItems } = useContext(MyCartContext);

// 	const item = cartItems.find(i => i.id === itemId);
// 	const stock = item ? Number(item.stock) : 0;
// 	console.log(`Botón de incremento - Producto ID: ${itemId}, Cantidad: ${quantity}, Stock: ${stock}`); // Verifica quantity y stock en el botón
// Define funciones locales para manejar los clics de incremento y decremento
// const handleIncrease = () => {
// 	if (quantity < stock) {
// 		increaseQuantity(itemId);
// 	}
// };
// const handleDecrease = () => {
// 	if (quantity > 1) {
// 		decreaseQuantity(itemId);
// 	}
// };
// 	return (
// 		<div>
// 			<button onClick={handleDecrease} disabled={quantity <= 1} >-</button>
// 			<span className="quantity">Cantidad:ddfdf {quantity}</span>
// 			<button onClick={handleIncrease} disabled={quantity >= stock}>+</button>
// 			<button onClick={handleAddToCart}>Agregar al carrito</button>
// 		</div>
// 	);
// };

// export default CartItemActions;
