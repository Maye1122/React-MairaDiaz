import { useEffect, useState } from "react";
import products from "../assets/MOCK_DATA.json"
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null)
	const { id } = useParams();

	useEffect(() => {
		const selectProduct = products.find((product) => product.id === parseInt(id))
		setProduct(selectProduct)
	}, [id])

	return <ItemDetails product={product} />
}

export default ItemDetailContainer