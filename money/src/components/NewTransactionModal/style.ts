import styled from "styled-components"

export const Container = styled.div`
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


