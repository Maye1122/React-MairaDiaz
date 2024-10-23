import '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { MyCartContext } from '../context/CartContext';
import { useContext } from 'react';
import React from 'react';


function CartWidget() {


	const { countCarrito } = useContext(MyCartContext);
	return (

		<div className='carrito'>
			<i className='carrito__icono'>
				<FontAwesomeIcon icon={faShoppingCart} />
			</i>
			{countCarrito > 0 && (
				<span className='cart-count'>
					{countCarrito}
				</span>

			)}
		</div>
	);
}

export default CartWidget;
