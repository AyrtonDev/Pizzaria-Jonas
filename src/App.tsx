import React from "react";
import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Main/Main";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  );
}

export default App;
