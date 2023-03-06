//O sumário está sendo passado dentro da minha tag main, que é o meu dahsBoard, e sendo renderizado no meu app.tsx como se fosse o dashboard , juntamnete com o transactionTabel , que é a tabela dos elementos que estão sendo listados da api
//Este sumario, provavelmente , junto com as table vão estar em varias telas, por isso criei um componente dashBoard com tanto o meu sumário, como com a minha tabela de transação(Aqui sao as 3 divs que estão no meio do Header)

//Importação de Hooks:
import { useContext } from "react";

//Importação de estilos
import { Container } from "./styles";

//Importação de imagem
import incomeImg from "../../Assets/income.svg";
import outcomeImg from "../../Assets/outcome.svg";
import totalImg from "../../Assets/total.svg";

//Importação de contexto
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-Background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}

//Como obter os valores do contexto em um componente => possuimos duas formas , uma mais antiga e uma atual:
// 1 - Antiga => A forma antiga é passar {(data) => {console.log(data);return <p>Ok</p>}}  uma função assim  dentro desta tag consumer <TransactionsContext.Consumer> este data vai retornar o resultado do contexto , ou seja , um array vazio , que foi o valor que a gente passou la no app.tsx em contexto, um array vazio
// 2 - Atual  => Através do useContext(é a forma mais utilizada) => const data = useContext(TransactionsContext); console.log(data); esta forma muito melhor e mais simples, os dados já estão nesta váriavel "data", eu posso utilizar esta composição em qualquer componente, que eu irei ter os dados disponiveis
// 3 - Nos vamos utilizar o contexto neste caso para compartilhar as informações da api entre o meu "Summary" e o meu "NewTransactionModal"
// 4 - Nos temos que carregar as informações da requisição da api dentro do nosso contexto, para que os dois componentes tenham acesso a esta informação

// Passo a Passo para consumir o contexto:

// 1 - Importar o contexto aqui no app
// 2 - Utilizar o hook useContext para consumir o contexto, associando a variavel que vai fazer o map por exemplo
// 3 - Da um console.log na varivel que voce associou ao contexto para consumir o contexto , e ver se as informações estão chegando no console, já que no contexto a gente fez o consumo da api no componente, logo é para chegar os dados da api neste contexto( Que é onde eu posso fazer um map tbm )
