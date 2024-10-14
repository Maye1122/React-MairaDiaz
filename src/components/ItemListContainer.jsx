import ItemList from './ItemList'
import products from '../assets/MOCK_DATA.json'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ItemListContainer() {
	const [products2, setProducts] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		const traerProductos = async () => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 3000));

				//Filtrando por categoria 
				const filtroProductos = categoryId
					? products.filter((product) => product.category === categoryId)
					: products



				setProducts(filtroProductos);

				console.log('filtro productos', filtroProductos);


			} catch (error) {
				console.error('Error al traer los productos', error);
			}
		};
		traerProductos()
	}, [categoryId]);


	return (
		<ItemList products={products2} />
	);
}


export default ItemListContainer