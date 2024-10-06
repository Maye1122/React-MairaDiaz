const Item = ({ Item }) => {
	return (

		<section className="item__article">
			<img src={Item.picture} alt={Item.title} className="item__image" />
			<h3>{Item.title}</h3>
			<p>{Item.description}</p>
			<br />
			<p> ${Item.price}</p>

		</section>

	)
}

export default Item