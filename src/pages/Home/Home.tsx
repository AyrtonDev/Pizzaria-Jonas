import { useEffect } from 'react'
import { GridPizza } from './style'
import { CardPizza } from '../../components/Card/CardPizza'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { GetPizzasApi } from '../../features/pizzas/pizzas-api-slice'

export default () => {
	const dispatch = useAppDispatch()
	const pizzas = useAppSelector((state) => state.pizzas.entities)

	useEffect(() => {
		dispatch(GetPizzasApi())
	}, [])

	return (
		<GridPizza>
			{pizzas && (
				pizzas.map((item, index) => <CardPizza key={index} pizza={item} />))}
		</GridPizza>
	)
}
