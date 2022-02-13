import { PizzasProps } from "../../types/PIzzas";
import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axios.create({
    baseURL: "http://localhost:3000/pizzas",
  }),
  endpoints(builder) {
    return {
      getPizza: builder.query<PizzasProps, number | void>({
        query(limit) {
          return `/${limit}`;
        },
      }),
    };
  },
});

export const { useGetPizzaQuery } = apiSlice;
