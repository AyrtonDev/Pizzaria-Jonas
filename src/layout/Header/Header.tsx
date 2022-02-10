import { HeaderMain, HeaderSubMain, TitleMain } from "./style";
import { BsFillCartFill } from "react-icons/bs";

export const Header = () => {
  return (
    <HeaderMain>
      <HeaderSubMain>
        <TitleMain>Jonas Pizzaria</TitleMain>
        <BsFillCartFill color="#fff" fontSize="2rem" />
      </HeaderSubMain>
    </HeaderMain>
  );
};
