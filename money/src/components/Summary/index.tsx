//O sumário está sendo passado dentro da minha tag main, que é o meu dahsBoard, e sendo renderizado no meu app.tsx como se fosse o dashboard , juntamnete com o transactionTabel , que é a tabela dos elementos que estão sendo listados da api
//Este sumario, provavelmente , junto com as table vão estar em varias telas, por isso criei um componente dashBoard com tanto o meu sumário, como com a minha tabela de transação(Aqui sao as 3 divs que estão no meio do Header)

//Importação de Hooks:
import { useTransactions } from "../hooks/useTransactions";

//Importação de estilos
import { Container } from "./styles";

//Importação de imagem
import incomeImg from "../../Assets/income.svg";
import outcomeImg from "../../Assets/outcome.svg";
import totalImg from "../../Assets/total.svg";

export function Summary() {
  const { transactions } = useTransactions();

  //Utilização do reduce para somar e subtrair os valores de entrada  e saida do array que estamos recebendo através de um contexto
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == "deposit") {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } //Repare que aqui eu estou utilizando a concatenção "+=" ou "-=" porque eu quero a exibição tanto do  'acc.deposit += acc.total' quanto a do 'acc.deposit += transaction.amount' e se eu não concatenasse com "=" ele só mostraria o ultimo  a ser colocado no lugar.
      else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("EUR", {
            style: "currency",
            currency: "EUR",
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {" "}
          -
          {new Intl.NumberFormat("EUR", {
            style: "currency",
            currency: "EUR",
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-Background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("EUR", {
            style: "currency",
            currency: "EUR",
          }).format(summary.total)}
        </strong>
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

//Passo a Passo para calcular os totais e não deixar como dados estaticos

// 1 - Eu posso fazer com duas opções, utilizar o metodo redux e criar tres variaveis , um para o deposit , withdraw e total(Porem vou optar pela a segunda opção que reduz estas tres variaveis)
// 2 - explicando a função reduce => esta função retorna a soma de maneira rapida de todos os elementos de um array, o primeiro parametro ele é o acumulador, ele soma o numero zero + o indice zero do parametro, então estou dizendo para cada vez que alguem adicionar uma nova entrada no array, ele vai somar o indice que o array ficou mais a nova transação, se não adiconar nada, ele simplesmente vai retornar o ultimo valor do array, o acumulador
// 3 - fiz um reduce para cada , filtrei os resultados do tipo, entradas nas entradas e nas saidas , depois fiz um reduce do array todo no total sem utilizar o if

// 4 -Exemplo =>
//Somando o total das transactions através do redux: // Então aqui, eu estou fazendo de forma separada, se ele for do tipo deposit eu vou somar os valores só do deposito e colocar no lugar da variavel de entradas e passo essa variavel no campo de entradas(O indice zero que eu passei é referente a partir de qual elemento eu quero que ele comece a soma, e eu quero a aprtid do indice zero)(Ou seja, estou utilizando o redux para somar todas as opções do tipo deposit)
//Perceba que a função reduce possui dois parametros obrigatórios =>
//Perceba que o reduce ele é um método tipo um map, por isso eu tenho acesso a todos os elementos do meu array transactions, que eu estou consumindo do meu contexto

//Reduce para as entradas
//const totalDeposits = transactions.reduce((acc, transaction) => {
//if (transaction.type == "deposit") {
//return acc + transaction.amount;
//}

//return acc;
//}, 0);

//Reduce para as saidas:
//const totalWithdraw = transactions.reduce((acc, transaction) => {
//if (transaction.type == "withdraw") {
//return acc + transaction.amount;
//}

//return acc;
//}, 0);

//Metodo para somar o total de deposit e o total de withdraw

//const total = totalDeposits - totalWithdraw;  // O total é a diminuição dos dois

//Opção de soma dos elementos de forma reduzida

// 1 - Vou reduzir todo esse reduce a uma única váriavel, ao inves de eu iniciar o valor com zero, eu simplesmente, iniciei o objeto, e iniciei os tres valores(deposits,withdraws e total = 0)
// 2 - agora dentro deste mesmo redux eu posso fazer as somas através do if com seus tipos e passar esta unica variavel no tres campos, que ele vai seguir como orientação os tipos
// 3 - transformei os tipos em objeto no redux, o meu acc é o acumulador total do array, por isso eu estou passando ele como um retorno sempre no final , pq eu quero que ele retorne
// 4 - se ele for do tipo deposit vai somar , caso contrário é do tipo withdraw, ai vai somar o valor acumulado só do withdraw
// 5 - se for do tipo o withdraw , vai subtrair o valor colocado do total, se for do tipo deposit, vai somar ao valor total
// 6 - Fazer uma formatção de numero para dinheiro, igual a que a gente fez no transaction table, para real
