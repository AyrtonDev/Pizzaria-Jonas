import { DivCart, HeaderMain, HeaderSubMain, ItemsCart, TitleMain } from './style'
import { BsFillCartFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useEffect } from 'react'
import { GetCartApi } from '../../features/cart/cartItems-api-slice'
import { Link } from 'react-router-dom'

export const Header = () => {
	const dispatch = useAppDispatch()
	const cart = useAppSelector((state) => state.cart.entities)

	useEffect(() => {
		dispatch(GetCartApi())
	}, [])
	return (
		<HeaderMain>
			<HeaderSubMain>
				<Link to="/">
					<TitleMain>Jonas Pizzaria</TitleMain>
				</Link>
				<Link to="/cart">
					<DivCart cart={cart}>
						<BsFillCartFill color="#fff" fontSize="2rem" />
						{cart.items.length != 0 && <ItemsCart>{cart}</ItemsCart>}
					</DivCart>
				</Link>
			</HeaderSubMain>
		</HeaderMain>
	)
}
