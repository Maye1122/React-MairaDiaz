import ItemList from './ItemList'
import products from '../assets/MOCK_DATA.json'
import { useEffect, useState } from 'react'

function ItemListContainer() {
	const [products2, setProducts] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setProducts(products);

		}, 3000);
	}, [])
	return (
		<ItemList products={products2} />
	)

}

export default ItemListContainer
