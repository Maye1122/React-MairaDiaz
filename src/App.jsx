import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import { MyCartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Loader from './components/loader'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


	const [loading, setLoading] = useState(false)
	return (
		<MyCartProvider>
			<BrowserRouter>
				<NavBar />
				{loading && <Loader loading={loading} />}
				<Routes>
					<Route path="/" element={<ItemListContainer setLoading={setLoading} />} />
					<Route path="/category/:categoryId" element=
						{<ItemListContainer setLoading={setLoading} />} />
					<Route path="/detail/:id" element={<ItemDetailContainer setLoading={setLoading} />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</MyCartProvider >


	)
}

export default App

