import { DivText, RowTable, TitlaTh } from './style'

export const THeader = () => {
  return (
    <RowTable border='2px solid #fff'>
      <DivText justify='center'>
        <TitlaTh>Item</TitlaTh>
      </DivText>
      <DivText flex={4} justify="center">
        <TitlaTh>Nome</TitlaTh>
      </DivText>
      <DivText justify='center'>
        <TitlaTh>Qnt</TitlaTh>
      </DivText>
      <DivText flex={2} justify="end">
        <TitlaTh>Total</TitlaTh>
      </DivText>
    </RowTable>
  )
}