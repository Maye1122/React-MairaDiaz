import Item from "./item"

const ItemList = ({ products }) => {
	return (
		<div className="item">
			{products.map((product) => {
				return (
					<Item Item={product} key={product.id} />
				)
			})}
		</div>
	)
}


export default ItemList