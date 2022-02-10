import { useEffect, useState } from "react";
import { GridPizza } from "./style";
import { GetPizzas } from "../../hooks/useGetPizzas";
import { CardPizza } from "../../components/Card/CardPizza";

type pizzasProps = {
  id: number;
  name: string;
  img: string;
  price: number;
  priceFormat: string;
  sizes: [string];
  description: string;
};

export default () => {
  const [pizzas, setPizzas] = useState<pizzasProps[] | null>(null);

  function getList() {
    GetPizzas(setPizzas);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <GridPizza>
      {pizzas ? (
        pizzas.map((item, index) => <CardPizza key={index} pizza={item} />)
      ) : (
        <div></div>
      )}
    </GridPizza>
  );
};
