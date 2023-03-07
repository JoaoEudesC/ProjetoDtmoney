//Aqui eu possuo a minha tabela de transações que são os exemplos de tabela que vão ser mostrados após serem consumidos da api, como as saidas , entradas , quantidade de dinheiro, categoria e data de criação
//Aqui eu criei um estado para consumir a api fake criada no arquivo services, por tanto os valores do input estão sendo enviados para lá e consumidos aqui
//Criei um interface com os dados que eu vou consumir da api , após verificar em como estou recebendo estes dados no console(Estou utilizando o mirage.js)
//Criei uma table Thead titulo de cada campo e depois dentro do tbody eu fiz um map, no meu array de elementos em que eu adicionei, os dados do array dentro deste array e exibir estes dados em tela
//Utilizei uma bibilioteca nativa do browser para formatação de caracteres , o Nome é Intl , para exibir o campo amount com o formato da moeda que eu quero e a data no formato que eu quero do brasil
//Estou importando a api , do arquivo services onde eu criei uma api fake e estou renderizando ela e montando ela no arquivo index.tsx, motando a estrutura e já , colocando o formato e preenchendo o "banco de dados" com alguns dados , para que eu possa trabalhar com esta api de uma forma mais amigável

//Hooks
import { useTransactions } from "../hooks/useTransactions";

//Importação de componentes
import { Container } from "./styles";

export function TrasactionTable() {
  //Aqui eu vou ter que criar um estado para que eu possa listar aquilo que está salvo no banco de dados wm tela
  const { transactions } = useTransactions();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("EUR", {
                    style: "currency",
                    currency: "EUR",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("EUR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

//1-Repare em como eu consigo Listar os dados de uma api em uma tabela
//2-Se eu quiser utilizar parenteses no lugar de chaves, eu não preciso utilizar o return , pq é como se ja viesse um return explicito
//3-O meu transaction ficou com tipo never, pq ele não conseguiu entender a tipagem no map()(A gente tem que informar la no estado qual é o formato porque sempre que o state for um vetor ou um objeto a gente tem que tipalo)
//4-Vamos utilizar uma api nativa do browser para realizar formatações como por exemplo da data(a gente não precisa utilizar bibiliotecas externas para fazer Formatção no javascript ou typescript)
//O nome da bibilioteca se chama "intl" e eu estou passando diretamente nas chaves(Utilizei para formatar a moeda no formato de real)
//Para colocar na formatação de data eu tenho que converter o valor que esta vindo da api em string para date
//Repare esta lógica do map que possui a mesma logica de de listar os itens de uma lista de tarefas

//Passo a Passo para utilizar o contexto:

// 1 - Importar o contexto
// 2 - Utilizar o useContext para consumir, Utilizando uma variável para consumir o contexto, da o nome da váriavel que você vai realizar o map
// 3 - Para eu acessar o contexto aqui agora o meu const "Transaction" que eu quero acessar do meu contexto tenho que receber em {} pq eu exportei ele como objeto no value do contexto, para que eu possa exportar as funções tbm
