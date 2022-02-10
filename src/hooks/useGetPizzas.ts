import { formatPrice } from "../utils/formatPrice";
import axios from "axios";

type pizzasProps = {
  id: number;
  name: string;
  img: string;
  price: number;
  priceFormat: string;
  sizes: [string];
  description: string;
};

export const GetPizzas = async (
  setPizzas: React.Dispatch<React.SetStateAction<pizzasProps[] | null>>
) => {
  try {
    const { data } = await axios.get("http://localhost:3000/pizzas");

    const listTreated = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      img: item.img,
      price: item.price,
      priceFormat: formatPrice(item.price),
      sizes: item.sizes,
      description: item.description,
    }));
    setPizzas(listTreated);
  } catch (error) {
    console.error(error);
  }
};
