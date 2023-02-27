import styled from "styled-components"



export const Container = styled.div`
display:grid;
grid-template-columns:repeat(3 , 1fr);  //Repare nesta maneira de utilizar o grid => o repeat serve para se eu repetir = 1fr, 1fr, 1fr
//Unidade de medida fr => 1fr = 33% do grid, neste caso eu quero , repetir tres vezes 33% 33% 33%
gap:2rem;
margin-top:-10rem;  //este comando fez com que eu jogasse os meus sumários para cima do cabeçalho metade da div ocupada

//Estilizando as divs dentro do meu container
div{
    background: var(--shape);
    padding:1.5rem 2rem;
    border-radius:0.25rem;
    color:var(--text-title);
    
    header{
        display:flex;
        align-items:center;
    }

    strong{
        display:block;
        margin-top:1rem;
        font-size:2rem;
        font-weight:500;
        line-height:3rem;
    }

    &.highlight-Background {
        background:var(--green);
        color: #fff;
    }


}

`;


//Repare como eu utilizo classe no styleComponent => eu coloco o & comercial e em seguida coloco a classe que adicionei ao elemento e defino a estilização


//Geralmente neste curso se cria conteiner em todos os estilos, pq geralmente é aquela div que vai em volta de tudo