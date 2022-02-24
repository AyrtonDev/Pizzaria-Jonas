import { DivTitlePage, TitlePage } from '../../components/Container/style'
import { TBody } from '../../components/Table/Tb/TbCart'
import { THeader } from '../../components/Table/Th/ThCart'
import { DivCart } from './style'

export default () => {
  return (
    <>
      <DivTitlePage>
        <TitlePage>Carrinho</TitlePage>
      </DivTitlePage>
      <DivCart>
        <THeader />
        <TBody item={1} img='images/pizza.png' nome='Mussarela' qnt={2} price={16.0} />
      </DivCart>
    </>
  )
}