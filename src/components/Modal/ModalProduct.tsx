import { useState } from "react";
import { BtnAmount } from "../Button/ButtonAmount";
import { DivColumn, DivDescPizza } from "../Container/style";
import {
  BtnAddCart,
  Cancel,
  DescProductModal,
  DivPrice,
  DivSize,
  LayerPrincipal,
  Modal,
  ModalContainer,
  OptionLeft,
  OptionMiddle,
  OptionRight,
  PriceT,
  SpanSize,
  TitleOption,
  TitleProductModal,
} from "./style";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type sizeProps = "sm" | "md" | "lg";

export const ModalProduct = ({ isOpen, onClose }: ModalProps) => {
  const [sizeSelect, setSizeSelect] = useState<sizeProps>("lg");
  const [amount, setAmount] = useState<number>(1);

  const closeModal = () => {
    onClose();
    setSizeSelect("lg");
    setAmount(1);
  };

  const handleAmount = (option: string) => {
    if (option === "add") {
      amount != 8 && setAmount(amount + 1);
    } else {
      amount != 1 && setAmount(amount - 1);
    }
  };

  return isOpen ? (
    <>
      <LayerPrincipal>
        <Modal>
          <ModalContainer>
            <img src="images/pizza2.png" />
          </ModalContainer>
          <ModalContainer>
            <DivColumn>
              <DivDescPizza>
                <TitleProductModal>Mussarela</TitleProductModal>
                <DescProductModal>
                  Essa pizza foi feita pelo proprio mestre pizzaiolo Jonas!
                  Selecionada com os melhores queijos, tudo para proporcionar a
                  melhor experiencia gastronomica!
                </DescProductModal>
                <TitleOption>TAMANHO</TitleOption>
                <DivSize>
                  <OptionLeft
                    sizeSct={sizeSelect}
                    onClick={() => setSizeSelect("sm")}
                  >
                    PEQUENA <SpanSize> 320g</SpanSize>
                  </OptionLeft>
                  <OptionMiddle
                    sizeSct={sizeSelect}
                    onClick={() => setSizeSelect("md")}
                  >
                    MÉDIO <SpanSize> 530g</SpanSize>
                  </OptionMiddle>
                  <OptionRight
                    sizeSct={sizeSelect}
                    onClick={() => setSizeSelect("lg")}
                  >
                    GRANDE <SpanSize> 860g</SpanSize>
                  </OptionRight>
                </DivSize>
                <TitleOption>PREÇO</TitleOption>
                <DivPrice>
                  <PriceT>R$ 18,20</PriceT>{" "}
                  <BtnAmount
                    amount={amount}
                    increment={() => handleAmount("add")}
                    descrement={() => handleAmount("rem")}
                  />
                </DivPrice>
                <div>
                  <BtnAddCart>Adicionar ao carrinho</BtnAddCart>
                  <Cancel onClick={closeModal}>Cancelar</Cancel>
                </div>
              </DivDescPizza>
            </DivColumn>
          </ModalContainer>
        </Modal>
      </LayerPrincipal>
    </>
  ) : null;
};
