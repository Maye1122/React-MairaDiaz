import React from "react"
import { Link } from "react-router-dom"



function Footer() {
	return (
		<footer className="footer">
			<ul>
				<li><Link to={"/"} >Instagram</Link></li>

				<li><Link to={"/"} >Facebook</Link></li>
				<li><Link to={"/"} >GitHub</Link></li>
			</ul>
		</footer>
	)
}

export default Footer