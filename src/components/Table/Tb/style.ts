import styled from 'styled-components'

type divContent = {
  flex?: string | number
  justify?: string
}

export const DivContent = styled.div<divContent>`
  padding: 5px;
  display: flex;
  flex: ${({ flex }) => (flex ? flex : '1')};
  justify-content: ${({ justify }) => (justify ? justify : 'start')};
  align-items: center;
  color: var(--black);
  font-size: 1.2rem;
`

export const ImgPrev = styled.img`
  width: 100px;
  margin: -20px 40px -20px 0;
`
