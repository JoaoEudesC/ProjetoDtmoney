//Este é o header da minha aplicação , ou seja, Criei um componente para ele pq provavelmente vou utilizar ele em outras partes do meu código tbm, sendo assim eu tenho um botão no meu header que vai executar a função de abrir o modal.
//O botão que vai abrir o modal, precisa de uma função de click , e esta função esta sendo criada la no app.tsx e passada para esse componente via props e o modal foi criado um componente para ele separadamente e esta sendo passado no app.tsx
//Aqui no meu Header eu possuo duas divs , uma dentro da outra para que eu possa posicionar elementos de forma melhor , como a minha logo e o titulo e dentro ter tresBlocos

import logo from "../../Assets/logo.svg";
import { Container } from "./styles";
import { Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
  //handleOpenNewTransactionModal():void
  //Repare nas duas maneiras que eu posso tipar esta mesma função, ambas são tipadas da mesma forma
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}

//Repare no inicio de estruturação do projeto , criei uma pasta components e dentro dela criei uma pasta header e dentro criei um arquivo index.tsx que é onde criei o header e exportei no app.tsx so para montar a estrutura base

//Utilizei um fragement no app.tsx , pq o elemento dentro de uma div, pode atrapalhar o layout da minha aplicação

//Perceba a boa prática de ter criado uma pasta header e não só o componente header , pq dentro da pasta eu vou colocar o styled component do componente e o componente e depois vou exportar o estilo no componentes

//Repare que eu estou importando as variaveis criadas com o styled component dentro do meu arquivo, o meu header virou a varivel Containner

// Repare na facilidade que esta bibilioteca nos deu para criar um modal, simples e rápido, portanto o modal pode ficar em qualquer lugar da tela
//No onrequestClose eu preciso passar a funçaõ de fechar o modal para que as funcionalidades sejam adicionadas como apertar esc e fechar ou clicar fora do modal e fechar

// 5 - um bom conceito que vai ser utilizado agora é a componetização, ou seja , nos vamos pegar o modal e passar ele diretamente no app.tsx, pq o modal ele não faz parte do meu cabeçalho, mas sim de todo o meu aplicativo em si, o botão do vabeçalho vai ser responsavel por abri-lo mas o modal não faz parte do cabeçalho

// 6 - Repare na real e útil utilização de uma props => como eu passei todo o meu modal para o app.tsx , pq ele é global, a função de abrir o modal tbm foi e ela não ficou declarada aqui, para eu utilizar ela, eu enviei ela através de uma props, pq o meu modal não faz parte do meu cabeçalho , mas é com o botão declaraddo no cabeçalho que eu vou abrir o modal
