import styled from 'styled-components'

type rowTable = {
    border?: string
    margin?: string
    align?: string
}

export const RowTable = styled.div<rowTable>`
    display: flex;
    width: 100%;
    padding: 0 ;
    border-bottom: ${({border}) => border ? border : 'none'};
    margin: ${({margin}) => margin ? margin : '0'};
    align-items: ${({align}) => align ? align : 'start'};
`

type divText = {
    flex?: number | string
    justify?: string
}

export const DivText = styled.div<divText>`
    padding: 5px;
    display: flex;
    flex: ${({flex})=> flex ? flex : '1'};
    justify-content: ${({justify})=> justify ? justify : 'start'};
`

export const TitlaTh = styled.p`
    font-family: "Hepta Slab", serif;
    font-weight: bold;
    color: #fff;
`