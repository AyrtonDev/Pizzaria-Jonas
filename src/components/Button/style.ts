import styled from 'styled-components'

export const BtnAdd = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  transition: 0.3s;
  border-radius: 50%;
  position: absolute;
  bottom: -20px;
  left: 37%;
  cursor: pointer;
  &:hover {
    background-color: var(--red-dark);
  }
`

export const DivBtn = styled.div`
  display: flex;
  width: auto;
  height: auto;
`

export const BtnDescrement = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: var(--black);
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ShowAMount = styled.div`
  padding: 5px 10px;
  background-color: var(--black);
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BtnIncrement = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: var(--black);
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
