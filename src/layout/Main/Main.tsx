import { ReactNode } from 'react'
import { MainDiv, SubMainDiv } from './style'

type mainProps = {
  children: ReactNode;
};

export const Main = ({ children }: mainProps) => {
	return (
		<MainDiv>
			<SubMainDiv>{children}</SubMainDiv>
		</MainDiv>
	)
}
