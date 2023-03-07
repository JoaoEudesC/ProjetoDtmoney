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

## 4 - Utilização de redux ou contexto => antigamente nos podiamos utilizar redux e ainda é muito utilizado hoje em dia, porém com a criação dos contextos, a gente pode substituir o redux em boa parte dos casos pelo método de contexto

## 5 - vai utilizar da mesma analogia, trazer as informações, como a função do componente pai para o componente filho, pq vou passar as funçoes para dois componentes filho como foi o caso do botão do header que vai abrir o modal

## 6 - como saber o momento certo de utilizar contextos na nossa aplicação => por exemplo neste caso, eu vou querer os dados de valores da api, tanto para ser passado no summary, quanto para ser passado no meu table, portanto se eu tenho o meu summary no dashboard junto com o meu transaction table , o mais sensato seria passar o consumo de api, com o useEffect do transaction table para o arquivo dashBoard , pq ai eu poderia passar os dados de amount para cada um dos dois, visto que o dashboard esta a armazenar estes dois componentes(Porem assim seria via props e eu quero via contexto)

## 7- Neste caso que foi mostrado acima não seria sensato colocar o consumo da api no dashboard mas deixar no arquivo transaction table, seria mais sensato, por isso o que eu vou fazer, é utilizar o contexto, para que eu possa deixar o consumo da api no arquivo transaction table, mas ainda assim conseguir passar estas informações para o meu summary para que ele possa utilizar os Amounts da api(se Você for um densenvolvedor full stack, é bom que você monte uma api fake para ter um controle melhor do Schema que você irá criar no banco de dados)

## 8 - Quando utilizar o contexto => ele é um compartilhamento de estado entre vários componentes da aplicação, independente de onde estes componentes estejam, ou seja , eu não preciso passar para o elemento pai, eu consigo acessar estes dados diretamente do meu summary por exemplo(Eu utilizo os contextos para evitar o "prop-drilling" que é basicamente , se eu enviasse estes dados via props e eu tivesse vários componentes, eu ter que ficar passando estes componentes em subniveis para acessar aquele componente que poderia estar dentro de três componentes por exemplo )

## 9 - Resumindo => com o contexto eu consigo acessar informações de vários niveis da minha aplicação independente do nivel hierarquico que eles estejam na aplicação.

## 10- nos possuimos duas formas principais de compartilhar informações no react(podemos passar o estado para o elemento pai, para que ele seja compartilhado entre elementos filhos que é o que fizemos para acessar o modal no botão do header e no transactionModal) e podemos utilizar o "Contexto" => que é quando queremos passar informações são de forma mais complexa ou quando aquela informção parece não esta no lugar certo, que é como seria o caso do compartilhamento da nossa api(Nos podemos retornar qualquer tipo de dados em um contexto seja ele , array , função entre outros dados)

## Obs => Numa função relacionada a api a gente tem que passar async e await, como é o caso de que eu só quero fechar o modal apos o envio de formulário , se o post for bem sucedido, ou seja, eu tenho que colocar um async e await, todas as funções de post geralmente é assim

##CRIAÇÃO DE PRÓPRIO HOOK:

## 11 - Criação do nosso próprio hook => pq quando vamos utilizar o nosso contexto, nos temos que importar o nosso "useContext" e importar o nosso "Contexto" tbm, com esse hook que a gente vai reduzir estas duas linhas de importação nos nossos componentes.
