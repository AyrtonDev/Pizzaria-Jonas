import { IoIosAdd } from 'react-icons/io'
import { BtnAdd } from './style'

type btnProps = {
  fun: () => void;
};

export const ButtonAdd = ({ fun }: btnProps) => {
	return (
		<BtnAdd onClick={fun}>
			<IoIosAdd color="#fff" fontSize="2rem" />
		</BtnAdd>
	)
}
