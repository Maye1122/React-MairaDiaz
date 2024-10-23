import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import { MyCartProvider } from './context/CartContext'
import Cart from './components/Cart'


function App() {


	return (
		<MyCartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:categoryId" element=
						{<ItemListContainer />} />
					<Route path="/detail/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</MyCartProvider >


	)
}

export default App
{/* tiene navegabilidad el BrowserRouter  */ }
{/* <Layout>		</Layout> */ }
{/* <ItemListContainer /> */ }
