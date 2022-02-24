import { useState } from 'react'
import { formatPrice } from 'utils/formatPrice'
import { BtnAmount } from 'components/Button/ButtonAmount'
import { RowTable } from 'components/Table/Th/style'
import { DivContent, ImgPrev } from './style'

type singleProduct = {
  item: number
  img: string
  nome: string
  qnt: number
  price: number
}

export const TBody = ({ item, img, nome, qnt, price }: singleProduct) => {
  const [amount, setAmount] = useState<number>(qnt)

  const handleAmount = (option: string) => {
    if (option === 'add') {
      amount != 8 && setAmount(amount + 1)
    } else {
      amount != 1 && setAmount(amount - 1)
    }
  }

  return (
    <RowTable margin="1.5rem 0" align="center">
      <DivContent justify="center">{item}</DivContent>
      <DivContent justify="center" flex={4}>
        <ImgPrev src={img} />
        {nome}
      </DivContent>
      <DivContent justify="center">
        <BtnAmount
          amount={amount}
          increment={() => handleAmount('add')}
          descrement={() => handleAmount('rem')}
        />
      </DivContent>
      <DivContent justify="end" flex={2}>
        {formatPrice(price * amount)}
      </DivContent>
    </RowTable>
  )
}
