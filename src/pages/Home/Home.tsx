import { useEffect, useState } from "react";
import { GridPizza } from "./style";
// import { GetPizzas } from "../../hooks/useGetPizzas";
import { CardPizza } from "../../components/Card/CardPizza";
import { PizzasProps } from "../../types/PIzzas";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { GetPizzasApi } from "../../features/pizzas/pizzas-api-slice";

export default () => {
  const dispatch = useAppDispatch();
  const pizzas = useAppSelector((state) => state.pizzas.entities);

  useEffect(() => {
    dispatch(GetPizzasApi());
  }, []);
  const showAll = () => {
    console.log(pizzas);
  };

  return (
    <GridPizza onClick={showAll}>
      {pizzas ? (
        pizzas.map((item, index) => <CardPizza key={index} pizza={item} />)
      ) : (
        <div></div>
      )}
    </GridPizza>
  );
};
