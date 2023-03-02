//Aqui é onde a gente vai estilizar o nosso modal, mas nos não queremos jogar um monte de html lá dentro do modal no app.tsx, vamos fazer aqui e mudar para lá(Uma boa prática)

//Aqui novamente eu vou utilizar o conceito de props, para passar o estado e a função via props para estes elementos através de uma interface.
//Precisei utilizar os conceitos de props aqui , devido a criação de um arquivo somente para o modal, então primeiro eu transferi o Modal do header para o app.tsx e depois transferi o modal do app.tsx para este arquivo separado
//Em ambos os casos precisei passar props, passei uma para o header , que é a função de abrir o modal e agora vou passar estas duas props para ca

import Modal from "react-modal";
import { Container } from "./style";

//Importação de icones
import closeImage from "../../Assets/close.svg";

//Importação de de funções do modal
interface modal {
  onCloseNewTransactionModal: () => void;
  isNewTransactionModalOpen: boolean;
}

export function NewTransactionModal({
  onCloseNewTransactionModal,
  isNewTransactionModalOpen,
}: modal) {
  return (
    <Modal
      //Estilização do modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onCloseNewTransactionModal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "100%",
          backgroundColor: "#f0f2f5",
          maxWidth: "576px",
          padding: "3rem",
          position: "relative",
          borderRadius: "0.25rem",
          border: "solid black",
        },
      }}
    >
      <Container>
        <button
          type="button"
          onClick={onCloseNewTransactionModal}
          className="react-modal-close"
        >
          <img src={closeImage} alt="Icone de fechar modal" />
        </button>

        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input type="text" name="Categoria" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

//Perceba que eu tive que passar a váriavel do estado com o tipo boolean, pois eu startei o estado dela como false , sendo assim , o typeScript utilizou tipagem explicita, ou seja => boolean

//Porque que estas funções de fechar e abrir modal , ela não fica diretamente neste arquivo de modal ? pq por exemplo a função de abrir o modal que esta sendo passada no cabeçalho , ela nao poderia ser enviada daqui por props , se isso acontecesse a gente teria que utilizar uma propriedade no react que se chama contexto e valeria muito mais a pena neste caso utilizar props

//Nos vamos ter que estilizar o modal, como transformar o modal com um tamanho fixo no centro da tela , para nao ocupar a tela toda, arrendondar bordas , colocar um overlay mais escuro atrás(A gente consegue fazer isso de algumas formas)

// As formas => na documentação do react-modal nos conseguimos ver as formas de estilizaçoes em style, tanto o overlay, como o conteúdo de dentro(O overlay é a parte de trás) o formato do estilo tem na documentação
//Tmabem posso estilizar por classes

//Optei pela forma de dar um overlayClassName e um className , uma para estilização do overlay e outra para a estilização do conteudo a minha  maneira
