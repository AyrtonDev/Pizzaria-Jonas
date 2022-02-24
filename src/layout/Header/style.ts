import styled from 'styled-components'

export const HeaderMain = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  background-color: #000;
`

export const HeaderSubMain = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  a:-webkit-any-link {
    text-decoration: none;
  }
`

export const TitleMain = styled.h1`
  font-size: 3rem;
  color: var(--yellow);
  font-weight: 700;
  font-family: 'Hepta Slab', serif;
`

type CartStyleProps = {
  cart: number | undefined
}

export const DivCart = styled.div<CartStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  position: relative;
  cursor: ${(props) => (props.cart != 0 ? 'pointer' : 'normal')};
`

export const ItemsCart = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  color: var(--white);
  width: 17px;
  height: 17px;
  border-radius: 50%;
  bottom: -5px;
  right: 0;
  font-size: 10px;
`
