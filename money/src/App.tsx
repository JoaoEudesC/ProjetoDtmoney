//Importação de componentes
import { Dashboard } from "./components/dashBoardMain";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

//Importação de contexto
import { TransactionsProvider } from "./TransactionsContext";

//Hooks
import { useState } from "react";

//Importação do modal e suas consfigs
import Modal from "react-modal";

//Este comando é só para acessibilidade, para que ele não jogue o modal dentro do body, mas sim dentro da div root
Modal.setAppElement("#root");

export function App() {
  //Chamada da função de consumo de api, para que eu possa utiliza-la em um contexto

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
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
        isNewTransactionModalOpen={isNewTransactionModalOpen}
      />
    </TransactionsProvider>
  );
}

//E agora perceba que aqui dentro do meu app.tsx eu passei embaixo do Header o meu dashboard e não o meu Summary, pq o Summary está dentro do dashboard(O meu summary ta dentro da minha tag main)

//Perceba a importância de  utilizar export no lugar de export default , quando você utiliza o export, voce consegue definir o nome do componente e ele vai ter que ser passado com aquele nome entre chaves, não poderá ser mudado

//Utilização global com StyleCompnent

//Retirei o modal que eu tinha passado do header para cá e coloquei ele diretamente em um arquivo de modal só para ele , para que eu não precise ficar poluindo o meu app.tsx com muito html

//Possuimos duas maneiras de consumir isto como um contexto:

//1 - é passando o transaction, que é o nosso estado que esta com todos os dados da api diretamente no value do <transactioContext>(é bom neste momento que nos so temos um contexto, e ai todos os nossos usuários ficam com acesso a estes dados, mas se a gente possuir vários contextos é bom utilizar a opção 2)
//2 - Criar um componente , só para o contexto e consumilo lá , passar um children , e depois utilizar o contexto aqui englobando as tags que você quer que tenha acesso as informações do contexto.

//Passo a Passo para consumir o contexto aqui no app.tsx

//1 - Importar o componente contexto no app.tsx
//2 - englobar o componente contexto  entre as tags que você quer que possua essa informação
//3 - ir nos componentes que você quer utilizar este contexto e importar o componente contexto lá associar este contexto a uma váriavel , com o hooke useContext(Contexto a utilizar)
//4 - Fazer um map na variavel que você criou , pq neste caso eu fiz um array
