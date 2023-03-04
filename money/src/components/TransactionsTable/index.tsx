//Hooks
import { useEffect, useState } from "react";

//Importação de componentes
import { api } from "../../services/api";
import { Container } from "./styles";

//Interface para tipar os dados da api

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TrasactionTable() {
  //Aqui eu vou ter que criar um estado para que eu possa listar aquilo que está salvo no banco de dados wm tela
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  //Repare que aqui nos vamos utilizar o useEfect para consumir uma api do miraje.js(Tambem posso consumir duas apis de uma vez , ou seja, dois links)
  //Repare que eu utilizei uma função para que eu possa chamar este fetch api, para que eu possa transformar esta função em assicrona, para ela esperar o fetch antes de executar os comandos
  useEffect(() => {
    async function Fetch() {
      await api
        .get("/transactions", {
          headers: {
            "Cache-Control": "no-cache",
          },
        })
        .then((response) => setTransactions(response.data.transactions)); //Colocando os daos da api no meu estado
    }
    Fetch();
  }, []);
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
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
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
