import styled from "styled-components"

//Posso importar desta bibilioteca uma função chamada darken para escurecer uma cor(Olhar a documentação)
//Observação => no styled componente eu consigo Utilizar javascript para modificar as cores através de funções (Vou instalar o arquivo "polished para conseguir fazer isso")
import { darken , transparentize } from "polished";

//Importar do polished a cor mais clarinha do vermelho para que eu possa passar no botão(darkens => escurecer um pouco a cor , transparetize => deixar a cor um pouco mais transparente)





export const Container = styled.form`
h2{
    color:var(--text-title);
    font-size:1.5rem;
    margin-bottom:2rem;
    font-weight:600;
}


input{
    width:100%;
    padding:0 1.5rem;
    height:4rem;
    border-radius:0.25rem;
    border:1px solid #d7d7d7;
    background:#e7e9ee;
    font-weight:400;
    font-size:1rem;

    &::placeholder{
        color:var(--text-body) //Perceba que no css a gente pode alterar o elemento que possui a chave placeholder tbm e estilizar(Sempre que for estilizar um elemento que esteja dentro de outro elemento utilize o &:: sew for classe utilize o &.)
    }

    & + input{
        margin-top:1rem; //Aqui eu estou dizendo que todo ultimo input a contar de baixo para cima vai ter um margin top , ou seja nos três inputs
    }
}


    button[type="submit"] {
        width:100%;
        padding: 0 1.5rem;     //Perceba como eu posso estilizar utilizando o tipo do botão para especificar, caso eu tenha outro botão ele não será estilizado com este mesmo estilo
        height:4rem;
        background:var(--green);
        color:#fff;
        border-radius:0.25rem;
        border:0;
        font-size:1rem;
        margin-top:1.25rem;
        transition:0.2s;
        font-weight:600;


        &:hover{
            filter:brightness(0.9)
        }

    }
    .react-modal-close{
    position:absolute;
    right:1.5rem;
    top:1.5rem;                     //Perceba que se eu utilizo o position absolute, eu posso posicionar os elementos na tela so utilizando as propriedades right, left, top , bottom
    border:0;
    background:transparent;
    margin-bottom:10px;
    transition:0.2s;

    &:hover{
        filter:brightness(0.7)
    }
}
    
`;



export const TransactionTypeContainer = styled.div`
margin: 1rem 0;
display:grid;
grid-template-columns:repeat(2,1fr) ; // (posso colocar 1fr, 1fr ou assim mandando repetir 2x 1fr)Como são duas colunas eu posso colocar assim , basicamente utilizar o fr é bem melhor do que utilizar porcentagem, pq com fr eu não preciso fazer conta , quantas colunas eu quiser que os elementos ocupem igualmente é 1fr(para cada elemento , ou seja se eu colocar so 1 , os elementos vão ocupar 100% cada 1) para cada elemento na pagina
gap:0.5rem;

`








interface RadioBoxProps{
    isActive:boolean;
    activeColor:'green' | 'red';  //Eu tenho que definir quais strings eu posso passar nesta interface, se eu tivesse tipado so string, ele ocasionaria um erro, porque eu poderia passar qualquer string para ele
}

//Não estou utilizando as variáveis css justamente pq elas não vão ser lidas no javascript, se voce perceber, como estou utilizando javascript, eu tenho que passar as propriedades entres aspas como pode ver no comando abaixo na linha 107
const colors = {
    green: `${transparentize(0.9 , '#33cc95')}`,
    red:`${transparentize(0.9 ,'#E52E4D' )};` //Utilizando o polished novamente mas com a cor vermelha
}

//Criamos esta interface para que possamos enviar as propriedades tipadas criadas via props para o RadioBox
export const RadioBox = styled.button<RadioBoxProps>`
height: 4rem;
border: 1px solid #d7d7d7;
border-radius: 0.25rem;

background:${(props) => props.isActive 
? colors[props.activeColor]
: 'transparent'}; //Repare que existe a cor transparente no css
//Perceba que eu não coloco chaves na direção da arrow, isso quer dizer que me dar um return automatico, era a mesma coisa que eu por => background:${(props) => { return props.isActive ? '#eee' : 'transparent'}};(Portanto a outra forma que eu utilizei é mais simplificada)



display:flex;
align-items:center;
justify-content:center;
transition:border-color 0.2s; 

    &:hover{
        border-color: ${darken(0.1 , '#d7d7d7' )};  //(Utilizando o aaa, eu consigo ter um efeito muito bom de borda escurecida)Atenção, com o filter eu não consigo escurecer a borda do botão, pq ele escurece o botão por completo, por isso neste caso não vou conseguir escurece-lo
        //Perceba , quero escurecer em 10%(0.1) a cor que eu tinha antes que é a d7d7d7
    }


img{
    width:20px;
    height:20px;
}

span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color:var(--text-title)
    }

`
    

//Perceba que no styled component eu tenho que saber a hora certa de exportar um novo componente com estilo, eu posso fazer isso com quantos componentes eu quiser

//Uma funcionalidade muito boa do styled component, é eu conseguir através de uma interpolação acessar diretamente as propriedades do component passado e as funções feitas aqui , são passadas diretamente para o componente(Eu estou acessando a propriedade is active do componente Radio-box)
