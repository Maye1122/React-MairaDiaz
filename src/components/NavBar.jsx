import '../App'
import CartWidget from './CartWidget'


function NavBar() {
	return(
	<header>
		<nav className="navbar">
			<h1>Avocado.</h1>
			<ul>
				<li className="navbar__item">
					<a href="#home" className="navbar__link">Home</a>						
								</li>
				<li className="navbar__item">
					<a href="#men"className="navbar__link">Men</a>
				</li>
				<li className="navbar__item">
					<a href="#women"className="navbar__link">Women</a>
				</li>
				<li className="navbar__item">
					<a href="#kids"className="navbar__link">Kids</a>
				</li>
				<li className="navbar__item">
					<a href="#sale"className="navbar__link">Sale</a>
				</li>
			</ul>
			<CartWidget/>
		</nav>
		</header>
	)
}

export default NavBar