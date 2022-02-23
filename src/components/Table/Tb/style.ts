import styled from 'styled-components'

type divContent = {
    flex?: string | number
    justify?: string
}

export const DivContent = styled.div<divContent>`
    padding: 5px;
    display: flex;
    flex: ${({flex})=> flex ? flex : '1'};
    justify-content: ${({justify})=> justify ? justify : 'start'};
`