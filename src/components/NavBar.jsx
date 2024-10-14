import '../App'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
	return (
		<header>
			<nav className="navbar">
				<h1 >
					<Link to={"/"}>Avocado.</Link>
				</h1>
				<ul>
					<li className="navbar__item">
						<Link to={"/"} className="navbar__link">Home</Link>

					</li>
					<li className="navbar__item">
						<Link to={`/category/men`} className="navbar__link">Men</Link>
					</li>

					<li className="navbar__item">
						<Link to={"/category/women"} className='navbar__link'>Women</Link>

					</li>
					<li className="navbar__item">
						<Link to={"/category/kids"} className='navbar__link'>Kids</Link>
					</li>
					<li className="navbar__item">
						<Link to={"/category/sale"} className='navbar__link'>Sale</Link>

					</li>
				</ul>
				<CartWidget />
			</nav>
		</header >
	)
}

export default NavBar