import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export function TrasactionTable() {
  //Repare que aqui nos vamos utilizar o useEfect para consumir uma api do mireje.js(Tambem posso consumir duas apis de uma vez , ou seja, dois links)
  //Repare que possuimos duas maneiras de consumir esta api, através do then, mas tambem podemos utilizar o async e await, o que necessitariamos de utilizar somente um then e não dois
  //Repare que eu utilizei uma função para que eu possa chamar este fetch api, para que eu possa transformar esta função em assicrona, para ela esperar o fetch antes de executar os comandos
  useEffect(() => {
    async function Fetch() {
      await api
        .get("/transactions", {
          headers: {
            "Cache-Control": "no-cache",
          },
        })
        .then((response) => console.log(response.data));
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
          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td className="title">Aluguel</td>
            <td className="withdraw">- R$12.000</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
