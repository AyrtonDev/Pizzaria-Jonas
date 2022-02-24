import styled from 'styled-components'

type modalProps = {
  isOpen: boolean
}

export const LayerPrincipal = styled.div<modalProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  top: 0;
  left: 0;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: 0.3s ease-in-out;
`

export const Modal = styled.div`
  width: 900px;
  height: 450px;
  background-color: #000;
  border-radius: 5px;
  z-index: 9999;
  display: flex;
  padding: 1rem;
`

export const ModalContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
`

export const TitleProductModal = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--yellow);
`

export const DescProductModal = styled.p`
  color: var(--white);
  font-size: 0.9rem;
  font-weight: normal;
`

export const TitleOption = styled.h4`
  color: var(--yellow);
  font-size: 1rem;
  font-weight: normal;
`

export const DivSize = styled.div`
  display: flex;
  width: auto;
  height: auto;
`

type sizeSctProps = {
  sizeSct: 'sm' | 'md' | 'lg'
}

export const OptionText = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`

export const OptionLeft = styled.div<sizeSctProps>`
  color: var(--white);
  background-color: ${(props) => (props.sizeSct === 'sm' ? 'var(--red)' : 'var(--black)')};
  padding: 10px 15px;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #424242;
    color: #fff;
  }
`

export const OptionMiddle = styled.div<sizeSctProps>`
  color: var(--white);
  background-color: ${(props) => (props.sizeSct === 'md' ? 'var(--red)' : 'var(--black)')};
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #424242;
    color: #fff;
  }
`

export const OptionRight = styled.div<sizeSctProps>`
  color: var(--white);
  background-color: ${(props) => (props.sizeSct === 'lg' ? 'var(--red)' : 'var(--black)')};
  padding: 10px 15px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #424242;
    color: #fff;
  }
`

export const SpanSize = styled.span`
  font-size: 0.7rem;
  margin-left: 0.2rem;
  font-weight: normal;
`

export const PriceT = styled.text`
  font-size: 1.4rem;
  font-weight: 600;
`

export const DivPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`

export const BtnAddCart = styled.button`
  border: none;
  padding: 10px 15px;
  color: var(--green);
  border: 2px solid var(--green);
  background-color: transparent;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 25px;
  transition: 0.2s;
  :hover {
    background-color: var(--green);
    color: var(--white);
  }
`

export const Cancel = styled.button`
  border: none;
  padding: 10px 15px;
  border: 2px solid var(--red);
  background-color: var(--red);
  border-radius: 5px;

  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: var(--red);
    background-color: transparent;
  }
`
