import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import { BtnDescrement, BtnIncrement, DivBtn, ShowAMount } from './style'

type amountProps = {
  amount: number
  descrement: () => void
  increment: () => void
}

export const BtnAmount = ({ amount, descrement, increment }: amountProps) => {
  return (
    <DivBtn>
      <BtnDescrement onClick={descrement}>
        <IoIosRemove fontSize="1.1rem" opacity={amount === 1 ? '0.4' : '1'} />
      </BtnDescrement>
      <ShowAMount>{amount}</ShowAMount>
      <BtnIncrement onClick={increment}>
        <IoIosAdd
          color="var(--white)"
          fontSize="1.1rem"
          opacity={amount === 8 ? '0.4' : '1'}
        />
      </BtnIncrement>
    </DivBtn>
  )
}
