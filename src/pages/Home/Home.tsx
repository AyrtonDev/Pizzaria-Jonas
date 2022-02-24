import { useEffect } from 'react'
import { GridPizza } from './style'
import { CardPizza } from 'components/Card/CardPizza'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { GetPizzasApi } from 'features/pizzas/pizzas-api-slice'
import { DivTitlePage, TitlePage } from 'components/Container/style'

export default () => {
  const dispatch = useAppDispatch()
  const pizzas = useAppSelector((state) => state.pizzas.entities)

  useEffect(() => {
    dispatch(GetPizzasApi())
  }, [])

  return (
    <>
      <DivTitlePage>
        <TitlePage>Pizzas</TitlePage>
      </DivTitlePage>
      <GridPizza>
        {pizzas &&
          pizzas.map((item, index) => <CardPizza key={index} pizza={item} />)}
      </GridPizza>
    </>
  )
}
