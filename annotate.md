## 2 => repare que eu fiz apaguei todos os arquivos desnecessarios do projeto( na pasta src eu só deixei app.tsx , index.tsx e react-app-env.dts ) logo após verificar o app.tsx e verificar os arquivos que foram apgados e removelos de lá

## 3 => Retirei a estrutura gigante do index.html deixando somente duas meta tags , o title e o corpo do elemento

## 4 => repare em como eu configurei o package json => criei uma aba chamada dev dependencies onde eu tirei tudo da dependencia e coloquei la (na dependecia so deixei o react , react-dom , react.scripts , web-vitals)

## 5 => Utilizando o styleComponent => é o css no javascript => npm install styled-components (baixa a extensao styled components e depois é so usar => import styled from "styled-components";const Title = styled.h1`color:green`)utilizamos a partir de variaveis e depois passamos como se fosse um classname

## 4 => ao invés de colocar a tag, nos vamos substituir o h1 por exemplo pelo nome da variável neste caso title e colocamos a estilização que quisermos (Como é um componente as variaveis devem ser utlizadas somente com a primeira letra maiuscula)

## 5 => uma coisa boa do tyle component é o encadeamento de estilos como no sas , se eu tiver um botão dentro do meu componente title , eu posso passar um button dentro da tag title , com um estilo que ele vai conseguir

## 6 => Perceba que as folhas de estilo por se tratar de styled componente , o nome é arquivo.tsx e não .css

//Ultima aula => Summary rocketSeat
