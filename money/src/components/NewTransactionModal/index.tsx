//Importação do modal
import Modal from "react-modal";

//Importação da api
import { api } from "../../services/api";

//Importação de estilos
import { Container, TransactionTypeContainer, RadioBox } from "./style";

//Importação de imagens
import incomeImg from "../../Assets/income.svg";
import outcomeImg from "../../Assets/outcome.svg";

//Importação de icones
import closeImage from "../../Assets/close.svg";
import { FormEvent, useState } from "react";

//Importação de de funções do modal através de props do app.tsx
interface modal {
  onCloseNewTransactionModal: () => void;
  isNewTransactionModalOpen: boolean;
}

export function NewTransactionModal({
  onCloseNewTransactionModal,
  isNewTransactionModalOpen,
}: modal) {
  //Criação de estado para armazenar a informação de qual botão foi clicado pelo usuário
  const [title, setTitle] = useState(""); //O valor em string do input vai começar vazio
  const [value, setValue] = useState(0); //O valor numerico do input vai começar vazio
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    }; //Repare que eu posso dar um console.log em vários elementos ao mesmo tempo
    api.post("transactions", data);

    setTitle("");
    setValue(0);
    setCategory("");
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          type="button"
          onClick={onCloseNewTransactionModal}
          className="react-modal-close"
        >
          <img src={closeImage} alt="Icone de fechar modal" />
        </button>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            //Eu basicamente estou dizendo que quando a propriedade isActive for true, eu quero que o type dela seja deposit(e vou estilizar com base nisso)
            //A gente pode passar propriedades quando estamos utilizando o styled-component(Quando estamos utilizando ts, ele vai dizer que não existe essa propriedade no html element, por isso nos temos que criar uma interface no styled.ts e tipar ela lá)
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          name="Categoria"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

//Boa prática para botões => se voce quiser da um nome a uma imagem ou icone dentro do botão, coloque a imagem dentro do botão e depois coloque um span com o nome que você deseja que seja colocado

//Passos para trabalhar com um formulário => Abaixo
//1-colocar o preventDeafault para previnir o comportamento de sempre enviar o formulário(Função de onsubmit no form)
//2-definir a propriedade value de cada input, com o estado que vai armazenar que foi criado(Os estados são criados fora da função)
//3-Colocar a função onChange dentro de cada input(que a função que executa sempre que for digitado algum texto dentro do input) para pegar o valor através do e.target.value
//4-Da um set passando o valor digitado value dentro do useState
//5-Perceba que o e.target.value não é adimitido ser passado como number , tem que ser string(e.target.value sempre vai retornar em texto) mesmo que o input seja do tipo number, tenho que converter aquele value para number
//6-Para converter o valor do input para number eu posso(Number(e.target.value) ou parseInt(e.target.value) ou (+e.target.value))
