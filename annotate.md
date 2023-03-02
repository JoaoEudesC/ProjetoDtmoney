## 2 => repare que eu fiz apaguei todos os arquivos desnecessarios do projeto( na pasta src eu só deixei app.tsx , index.tsx e react-app-env.dts ) logo após verificar o app.tsx e verificar os arquivos que foram apgados e removelos de lá

## 3 => Retirei a estrutura gigante do index.html deixando somente duas meta tags , o title e o corpo do elemento

## 4 => repare em como eu configurei o package json => criei uma aba chamada dev dependencies onde eu tirei tudo da dependencia e coloquei la (na dependecia so deixei o react , react-dom , react.scripts , web-vitals)

## 5 => Utilizando o styleComponent => é o css no javascript => npm install styled-components (baixa a extensao styled components e depois é so usar => import styled from "styled-components";const Title = styled.h1`color:green`)utilizamos a partir de variaveis e depois passamos como se fosse um classname

## 4 => ao invés de colocar a tag, nos vamos substituir o h1 por exemplo pelo nome da variável neste caso title e colocamos a estilização que quisermos (Como é um componente as variaveis devem ser utlizadas somente com a primeira letra maiuscula)

## 5 => uma coisa boa do tyle component é o encadeamento de estilos como no sas , se eu tiver um botão dentro do meu componente title , eu posso passar um button dentro da tag title , com um estilo que ele vai conseguir

## 6 => Perceba que as folhas de estilo por se tratar de styled componente , o nome é arquivo.tsx e não .css

//Ultima aula => Summary rocketSeat

## 7 => Vamos utilizar o 'mirageJs' para criar uma api fake para utilizar no front-end

## 8 => boa prática é ir na área de networking para olhar o status da requisição que você realizou em uma api, como por exemplo quando voce faz uma requisição em uma api que não exsite , como um endereço que não existe, ele vai fornecer o erro 304

## 9 => A configuração do mirage , é feito no arquivo index.tsx(Se a requisição for sucesso , vai ser interceptado pelo mirage , e não vai aparcer mais no network, vai aparecer direto no console)

## 10 => nos não vamos utilizar o fetch para fazer a requisição neste caso, pq a gente tem que ficar passando o endereço e passando para json os dados

## 11 => vamos utilizar o axios , pq a gente consegue interceptar requisições no axios, consigo interceptar as respostas da minha aplicação tbm

## 12 => Configuração do axios => criar uma pasta service onde a gente vai colocar o axios, para ser utilizado,

## 13 => Estrutura de uma aplicação em react => 1-criar uma pagina pages onde vão as pages, e criar um pasta para cada pagina e dentro da pasta colocar o arquivo de style e o tsx

2- Criar uma página components e colocar lá uma pasta header ou footer , e dentro dele o arquivo de estilo e um arquivo.tsx para estilizar o componente a ser utilizado e reaproveitado nas outras pages

\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\*** Criando modal

# 1 - vamos desenvolver um modal para cadastrar tarefas , e vamos utilizar uma bibilioteca chamada react-modal para isso , ao invés de criar um modal totalmente do zero como fizemos no Todo-list

é interessante utilizar , por conta de algumas funcionalidades que ja vem de fábrica, como apertar esc e fechar o modal , ou clicar fora do modal e fechar o modal(que é mais fácil ja pegar pronto do que ficar reprosuzindo)

## 2 - a gente começa criando o nosso modal dentro header, visto que o botão que vai fazer abrir o modal , é o botão de transação que fica dentro do header

## 3 - nos vamos estilizar o nosso modal em um arquivo separado para que a gente não desorganize o código passando um monte de html diretamente no app.tsx por isso crio uma pasta escrita newTransaction e la dentro vou estilizar, mas nos não queremos jogar um monte de html lá dentro do modal no app.tsx, vamos fazer aqui e mudar para lá(Uma boa prática)
