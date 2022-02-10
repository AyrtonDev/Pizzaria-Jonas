import { Card, DivImg, TextNormal, TextDesc, TitleProduct } from "./style";
import { ButtonAdd } from "../../components/Button/ButtonAdd";
import { useState } from "react";
import { ModalProduct } from "../../components/Modal/ModalProduct";

type pizzasProps = {
  id: number;
  name: string;
  img: string;
  price: number;
  priceFormat: string;
  sizes: [string];
  description: string;
};

type CardProps = {
  pizza: pizzasProps;
};

export const CardPizza = ({ pizza }: CardProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Card>
      <DivImg>
        <img src={pizza.img} width="100%" />
        <ButtonAdd fun={() => setOpenModal(true)} />
      </DivImg>
      <TextNormal>{pizza.priceFormat}</TextNormal>
      <TitleProduct>{pizza.name}</TitleProduct>
      <TextDesc>{pizza.description}</TextDesc>
      <ModalProduct isOpen={openModal} onClose={() => setOpenModal(false)} />
    </Card>
  );
};
