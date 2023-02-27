import logo from "../../Assets/logo.svg";
import { Container } from "./styles";
import { Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}

//Repare no inicio de estruturação do projeto , criei uma pasta components e dentro dela criei uma pasta header e dentro criei um arquivo index.tsx que é onde criei o header e exportei no app.tsx so para montar a estrutura base

//Utilizei um fragement no app.tsx , pq o elemento dentro de uma div, pode atrapalhar o layout da minha aplicação

//Perceba a boa prática de ter criado uma pasta header e não só o componente header , pq dentro da pasta eu vou colocar o styled component do componente e o componente e depois vou exportar o estilo no componentes

//Repare que eu estou importando as variaveis criadas com o styled component dentro do meu arquivo, o meu header virou a varivel Container
