import React from "react";
import { Dashboard } from "./components/dashBoard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

//E agora perceba que aqui dentro do meu app.tsx eu passei embaixo do Header o meu dashboard e não o meu Summary, pq o Summary está dentro do dashboard(O meu summary ta dentro da minha tag main)

//Perceba a importância de  utilizar export no lugar de export default , quando você utiliza o export, voce consegue definir o nome do componente e ele vai ter que ser passado com aquele nome entre chaves, não poderá ser mudado

//Utilização global com StyleCompnent
