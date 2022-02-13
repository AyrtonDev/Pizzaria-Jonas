import styled from 'styled-components'

type modalProps = {
  isOpen: boolean;
};

export const LayerPrincipal = styled.div<modalProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  top: 0;
  left: 0;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: 0.3s;
`

export const Modal = styled.div`
  width: 900px;
  height: 450px;
  background-color: #fff;
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

export const TitleProductModal = styled.text`
  font-family: "Hepta Slab", serif;
  font-size: 1.6rem;
  font-weight: bold;
`

export const DescProductModal = styled.text`
  font-family: "Hepta Slab", serif;
  color: #4d4d4d;
  font-size: 0.9rem;
  font-weight: bold;
`

export const TitleOption = styled.text`
  font-family: "Hepta Slab", serif;
  color: #adadad;
  font-size: 1.2rem;
  font-weight: normal;
`

export const DivSize = styled.div`
  display: flex;
  width: auto;
  height: auto;
`

type sizeSctProps = {
  sizeSct: 'sm' | 'md' | 'lg';
};

export const OptionLeft = styled.div<sizeSctProps>`
  font-family: "Hepta Slab", serif;
  color: ${(props) => (props.sizeSct === 'sm' ? '#fff' : '#000')};
  background-color: ${(props) => (props.sizeSct === 'sm' ? '#399ade' : '#EEE')};
  font-size: 0.9rem;
  font-weight: bold;
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
  font-family: "Hepta Slab", serif;
  color: ${(props) => (props.sizeSct === 'md' ? '#fff' : '#000')};
  background-color: ${(props) => (props.sizeSct === 'md' ? '#399ade' : '#EEE')};
  font-size: 0.9rem;
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #424242;
    color: #fff;
  }
`

export const OptionRight = styled.div<sizeSctProps>`
  font-family: "Hepta Slab", serif;
  color: ${(props) => (props.sizeSct === 'lg' ? '#fff' : '#000')};
  background-color: ${(props) => (props.sizeSct === 'lg' ? '#399ade' : '#EEE')};
  font-size: 0.9rem;
  font-weight: bold;
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
  font-family: "Hepta Slab", serif;
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
  color: #fff;
  background-color: #54fe54;
  font-family: "Hepta Slab", serif;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 25px;
  transition: 0.2s;
  :hover {
    background-color: #005300;
  }
`

export const Cancel = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: #eee;
  border-radius: 5px;
  font-family: "Hepta Slab", serif;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: #fff;
    background-color: #434343;
  }
`
