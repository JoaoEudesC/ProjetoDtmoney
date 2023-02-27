import styled from "styled-components";

//Repare que na sintaxe do style componente ela deve terminar com ponto e virgula depois da crase , caso comtrário ocasiona erro e no final de cada estilo tbm deve ter um ponto e virgula
export const StyleComponente = () => {
  const H2 = styled.h2`
    color: red;
    background-color: green;
  `;

  const H3 = styled.h3`
    color: blue;
    background-color: orange;
  `;

  const Div = styled.div`
    background-color: #b3b3ff;
    button {
      background-color: red;
    }
  `;

  return (
    <div>
      <Div>
        <H2>O melhor jeito para estilizar css é com o styledComponent</H2>
        <button>Clique em mim</button>
      </Div>
      <H3>Melhor estilizar desta forma do que da forma original</H3>
    </div>
  );
};

//Perceba no encadeamento que eu posso fazer com o styleComponent , com o mesmo estilo como é o caso de eu colocar um botão dentro do componente div
//Este encademento tbm é utilizado no sas
//A nossa estilização fica apenas dentro so arquivo do componente que será estilizado
