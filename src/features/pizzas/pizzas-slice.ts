import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzasProps } from "../../types/PIzzas";

type ValueProps = {
  value: PizzasProps[] | null;
};

const initialState: ValueProps = {
  value: null,
};

const pizzasSlice = createSlice({
  name: "Pizzas",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer;
