import React from 'react';
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";
import Loader from './Loader';



function ItemListContainer() {
	const [loading,setLoading] = useState(true)
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);
	const { categoryId } = useParams();
	// console.log('valor de categoryid', categoryId);
	
	if (categoryId === undefined) {
		console.warn('El parámetro categoryId no está definido en la URL.');
	}

	useEffect(() => {
		setLoading(true)
		const fetchProducts = async () => {
			try{
			let productsFiltered = [];
			// console.log(productsFiltered);
			

			if (categoryId) {
				const q = query(collection(db, "products"),
				 where("category", "==", categoryId));

				const querySnapshot = await getDocs(q);
				querySnapshot.forEach((doc) => {
					productsFiltered.push({ id: doc.id, ...doc.data() });	
					// doc.data() is never undefined for query doc snapshots
					// console.log(doc.id, " => ", doc.data());
				});
				 setProducts(productsFiltered);
			} else {

				const querySnapshot = await getDocs(collection(db, "products"));
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					// console.log(doc.id, " => ", doc.data());
					productsFiltered.push({ id: doc.id, ...doc.data() })
				});
				setProducts(productsFiltered)
			}
			}catch(error){
				console.log(error);
				
				setError(`Error al traer los productos: ${error.message}`);
			} finally {
				setLoading(false)
				}
			}
fetchProducts();

		}, [categoryId]);
	if (loading) {
		return <Loader/> ; // Aquí se muestra el loader
	}
	if (error) { return <div> {error}</div > }
	
	return (
		<ItemList products={products} />
	);
}


export default ItemListContainer
		// const traerProductos = async () => {
		// 	setLoading(true);
		// 	try {
		// 		await new Promise((resolve) => setTimeout(resolve, 3000));
	
		// 		//Filtrando por categoria 
		// 		const filtroProductos = categoryId
		// 			? products.filter((product) => product.category === categoryId)
		// 			: products
		// 		setProducts(filtroProductos);
	
		// 	} catch (error) {
		// 		setError('Error al traer los productos')
		// 	} finally {
		// 		setLoading(false)
		// 	}
		// };
		// traerProductos()