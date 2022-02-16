import { Header } from './layout/Header/Header'
import { Main } from './layout/Main/Main'
import Home from './pages/Home/Home'
import {
	Routes,
	Route,
	Link,
} from 'react-router-dom'
import Cart from './pages/Cart/Cart'

function App() {
	return (
		<>
			<Header/>
			<Main>
				<Routes>
					<Route path='/' element={<Home />} />
			
					<Route path='/cart' element={<Cart />}/>
				</Routes>
			</Main>
		</>
	)
}

export default App
