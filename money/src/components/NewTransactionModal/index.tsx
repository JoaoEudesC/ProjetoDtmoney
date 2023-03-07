//Aqui neste arquivo eu tirei o modal do header , porque o modal é global e não faz parte de nenhum componente ele é próprio, portanto ele seria passado no app.tsx, e agora ele não sera passado mais lá, pq eu criei um componente só para ele e passsei aqui
//Porém como eu estou usando funcionalidades do modal em dois componentes diferentes, como é o caso do meu botão no Header e depois aqui no botão tbm eu criei as funções do modal no app.tsx e estou passando aqui via props
//Como é o caso de fechar o modal quando clicar fora dele , e tbm passar esta função para a minha imagem de "x" para fechar o modal
//E passar a função isOpen (que é o estado do modal aberto ou não) que diretamente o estado ou não que começa em falso pq ele é fechado

//Importação do context e componentes E HOOKS
import { useTransactions } from "../hooks/useTransactions";

//Importação do modal
import Modal from "react-modal";

//Importação de estilos
import { Container, TransactionTypeContainer, RadioBox } from "./style";

//Importação de imagens
import incomeImg from "../../Assets/income.svg";
import outcomeImg from "../../Assets/outcome.svg";
import closeImage from "../../Assets/close.svg";

//Importação de Hooks

import { FormEvent, useState } from "react";

//Criação de interface
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
  const [amount, setAmount] = useState(0); //O valor numerico do input vai começar vazio
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  //Utilização do contexto

  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    onCloseNewTransactionModal(); //Fechar o modal, mas eu só quero que feche o modal se a minha transaction for realmente criada e der certo(Para isso eu vou utilizar a função async e await) que é para antes de fechar o modal, a função de fechar esperar ate que esteja feito o post para que ela feche(Tenho que tipar ela no contexto como promise) e exportar ela como "async" e "await"  e aqui tbm tenho que fazer isso
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("");
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
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
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

//Passo a Passo de como mapear a minha api em tempo real(Ou seja, eu já estou fazendo um map na minha api, quando eu faço um post enviando os dados através do modal, eu quero que esse post novo, seja tbm renderizado no meu map em tempo real na minha tela)

// 1 - Importar o useContext aqui , mais um lugar onde eu vou precisar utilizar a informação do meu contexto do transaction
// 2 - é aqui que a gente faz o nosso post, que é justamente o arquivo do nosso modal onde tem os inputs
// 3 - No temos duas alternativas para realizar esta renderização, o "transaction" ele é a varaive, eu não posso alterar ele diretamente, então eu poderia passar la no value do meu context o "setTransactions" tbm para que eu possa altera-lo aqui
// 4 - A segunda alternativa(Escolhida) eu vou pegar a parte da lógica do post, que foi feita dentro da função de envio de formulário e vou passar diretamente para o meu contexto
// 5 - Vou criar uma função lá , em que eu vou substituir o objeto data que eu tinha por "transaction"
// 6 - como eu exportei em um objeto, o transaction e a função , eu tenho que recebelos do consumo do contexto como objeto tbm igual no node, e posso acessar qualquer propriedade que tenha sido passado por objeto(Como é o caso desta função)
