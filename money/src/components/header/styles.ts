import styled from "styled-components"

export const Container = styled.header`
background:var(--blue)
`


export const Content = styled.div`
max-width:1120px;
margin:0 auto;

padding: 2rem 1rem 12rem;   //Isto significa que eu estou colocando 16px de padding nas laterais e 160px de padding embaixo(começa de cima e roda para esquerda) Perceba como utilizar esta unidade de medida 10x16 = 160px
display:flex;
align-items:center;
justify-content:space-between;



button{
    font-size:1rem;
    color:#fff;
    background: var(--blue-light);
    border:0;
    padding:0 2rem;
    border-radius: 0.25rem;
    height:3rem;//Até na estilização do botão é uma boa prática utilizar o rem(Perceba que eu setei que a altura do botão será 48px) boa prática , sempre que utilizar esta unidade de medida
    transition:filter 0.2s; //Toda vez que o filte do meu botão for alterado, vou fazer uma transição de 0.2s
    &:hover{
        //filter:blur(5px)
        filter:brightness(0.9);//O brightness escurece um poquinho o elemento , assim eu não preciso procurar uma cor mais clara para passar no css
        
    }
    //Perceba como funciona o hover no styledComponent , eu preciso passar o hover dentro do botão para ativar a funcionalidade
    //Utilize a tag filter para estilizações mais maneiras como, o blur(30px) que vai embassar o botão completamente
}   
`;










//Repare que aqui eu posso utilizar uma váriavel que eu criei no arquivo styles global.ts, aquelas variaveis eu posso utilizar em todo lugar agora

//Tudo que eu preciso fazer é passar a estilização que eu quero e no valor da estilização eu passo a variável que eu quero associar