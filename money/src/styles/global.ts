//Criação de um estilo global , como a cor de fundo , font-family ( vamos utilizar o style-Componente para realizar estes estilos )

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue:#5429cc;
    --green:#33CC95;
    --blue-light:#6933ff;

    --text-title:#363f5f;
    --text-body:#969cb3;

    --shape:#FFFFFF;
    
}


*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

// Font-size 16px é um padrão que ja vem , que é para desktop 

html{
    @media (max-width: 1080px){
        font-size:93.75%;//Isto aqui é igual a 15px, quando a tela for menor do que 1080px vai possuir 15, como a tela do por padrão é 16px eu estou dizendo que ela vai ter o tamanho de 93% de 16 px , que é 15px
    }
    //Isto é um media query local
    @media (max-width: 720px) {
        font-size:87.5%;//Estou utilizando o mesmo eschema acima (é igual a 14px)
    }
}

body{
    background-color: var(--background); //Estou pegando as variveis do root
    -webkit-font-smoothing:antialiased;  //No chrome as fontes vão ficar mais nitidas
}

body, input, textarea, button {
    //O input , o textarea e o button eles não importam a fonte por padrão do body, por isso tive que passar eles aqui tbm
    font-family:'Poppins', sans-serif;
    font-weight:400;

}



h1,h2,h3,h4,h5,h6,strong{
    font-weight:400;
    
}


button{
    cursor:pointer;
}

[disabled]{
    opacity:0.6;
    cursor:not-allowed;   //Todo elemento disabled na nossa aplicação vai ficar transparente, e vai aparecer a mensagem not-allowed
}
`





//Perceba como eu consigo utilizar variáveis no css, eu crio um root e associo uma variavel com a estilização que eu quero , e depois eu passo com o comando que eu utilizei no body
//Repare que passar variaveis no css torna o projeto mais profissional

//Porque utilizar o mediaQuery em porcentagem assim ? => a partir de agora para configurar a aplicação vou utilizar a unidade de medida (REM)
// 1 rem = 16px  ( ou seja ele é varivel em relção ao tamanho original da pagina do html 16px , logo quando tiver em telas menores , ela vai se ajustar tbm)
//Utilizar esta otima pratica de css para adaptar a nossa interface as telas desejadas
//Pq utilizar porcentagem nesta configuração global ? pq se o usuário estiver com um app de acessibilidade que ajusta o tamanho da fonte dele conforme a sua necessidade se eu utilizar pixel direto o tamanho nao vai mudar , eu fixei aquele tipo de tela
//Tentar implementar estes recursos nas outras aplicações já feitas


//OBS => nos proximos projetos lembrar de criar esse escomo global de boas práticas na aplicação, seja ela react ou javascript puro