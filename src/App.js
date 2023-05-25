import React, { useState, useEffect } from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/Switcher";

function App() {

  const obtenerTemaGuardado = () => {
    const temaGuardado = localStorage.getItem("tema");
    console.log(temaGuardado);
    return temaGuardado ? JSON.parse(temaGuardado) : true;
  };

  const [tema, setTema] = useState(obtenerTemaGuardado());

  useEffect(() => {
    localStorage.setItem("tema", tema);
  }, [tema]);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
