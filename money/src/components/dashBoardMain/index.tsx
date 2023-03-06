import { TrasactionTable } from "../TransactionsTable";
import { Summary } from "../Summary";
import { Container } from "./styles";
//O dashbord é como se fosse a minha tag main, então dentro da minha tag main vai está , o meu sumário que são as indicações dos valores , os quadros de negativo e positivo e as minhas tabelas , que eu vou colocar os dados da api, se é withdraw ou deposit
//Uma maneira escalável de colocar a tag main , assim , passo logo a dashBoard no app.tsx, depois do Header, pq provavelmente vou utilizar este dashboard em outras telas (Passo o modal o lá e está feito)
export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TrasactionTable />
    </Container>
  );
}
