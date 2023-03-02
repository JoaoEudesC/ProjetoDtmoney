//Importação de componentes

import { Dashboard } from "./components/dashBoard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

//Hooks
import { useState } from "react";

//Importação do modal e suas consfigs
import Modal from "react-modal";
Modal.setAppElement("#root");

//Este comando é só para acessibilidade, para que ele não jogue o modal dentro do body, mas sim dentro da div root

export function App() {
  //Funções relacionadas ao uso do modal, da bibilioteca react-modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
        isNewTransactionModalOpen={isNewTransactionModalOpen}
      />
    </>
  );
}

//E agora perceba que aqui dentro do meu app.tsx eu passei embaixo do Header o meu dashboard e não o meu Summary, pq o Summary está dentro do dashboard(O meu summary ta dentro da minha tag main)

//Perceba a importância de  utilizar export no lugar de export default , quando você utiliza o export, voce consegue definir o nome do componente e ele vai ter que ser passado com aquele nome entre chaves, não poderá ser mudado

//Utilização global com StyleCompnent

//Retirei o modal que eu tinha passado do header para cá e coloquei ele diretamente em um arquivo de modal só para ele , para que eu não precise ficar poluindo o meu app.tsx com muito html
