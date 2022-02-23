import { useState } from 'react'
import { useGetPizzaQuery } from '../../features/pizzas/pizza-api-slice'
import { formatPrice } from '../../utils/formatPrice'
import { BtnAmount } from '../Button/ButtonAmount'
import { DivColumn, DivDescPizza } from '../Container/style'
import {
  BtnAddCart,
  Cancel,
  DescProductModal,
  DivPrice,
  DivSize,
  LayerPrincipal,
  Modal,
  ModalContainer,
  OptionLeft,
  OptionMiddle,
  OptionRight,
  PriceT,
  SpanSize,
  TitleOption,
  TitleProductModal,
} from './style'

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  idProduct: number;
};

type sizeProps = 'sm' | 'md' | 'lg';

export const ModalProduct = ({ isOpen, onClose, idProduct }: ModalProps) => {
  const { data, isFetching } = useGetPizzaQuery(idProduct)
  const [sizeSelect, setSizeSelect] = useState<sizeProps>('lg')
  const [amount, setAmount] = useState<number>(1)

  const closeModal = () => {
    onClose()
    setSizeSelect('lg')
    setAmount(1)
  }

  const showAll = () => {
    console.log(data)
    console.log(isFetching)
  }

  const handleAmount = (option: string) => {
    if (option === 'add') {
      amount != 8 && setAmount(amount + 1)
    } else {
      amount != 1 && setAmount(amount - 1)
    }
  }

  return (
    <LayerPrincipal isOpen={isOpen}>
      <Modal>
        <ModalContainer>
          <img src={data?.img} />
        </ModalContainer>
        <ModalContainer>
          <DivColumn>
            <DivDescPizza>
              <TitleProductModal>{data?.name}</TitleProductModal>
              <DescProductModal>{data?.description}</DescProductModal>
              <TitleOption>TAMANHO</TitleOption>
              <DivSize>
                <OptionLeft
                  sizeSct={sizeSelect}
                  onClick={() => setSizeSelect('sm')}
                >
                  PEQUENA <SpanSize>{data?.sizes[0]}</SpanSize>
                </OptionLeft>
                <OptionMiddle
                  sizeSct={sizeSelect}
                  onClick={() => setSizeSelect('md')}
                >
                  MÉDIO <SpanSize>{data?.sizes[1]}</SpanSize>
                </OptionMiddle>
                <OptionRight
                  sizeSct={sizeSelect}
                  onClick={() => setSizeSelect('lg')}
                >
                  GRANDE <SpanSize>{data?.sizes[2]}</SpanSize>
                </OptionRight>
              </DivSize>
              <TitleOption>PREÇO</TitleOption>
              <DivPrice>
                <PriceT>{formatPrice(data?.price)}</PriceT>{' '}
                <BtnAmount
                  amount={amount}
                  increment={() => handleAmount('add')}
                  descrement={() => handleAmount('rem')}
                />
              </DivPrice>
              <div>
                <BtnAddCart onClick={showAll}>Adicionar ao carrinho</BtnAddCart>
                <Cancel onClick={closeModal}>Cancelar</Cancel>
              </div>
            </DivDescPizza>
          </DivColumn>
        </ModalContainer>
      </Modal>
    </LayerPrincipal>
  )
}
