//Esta é a forma mais simples de se criar um contexto no react, visto que eu vou colocar uma lista de saidas e entradas eu inicializei ele como uma arrya vazio

//Importação de hooks
import { createContext, useState, useEffect, ReactNode } from "react";

//Importação da api
import { api } from "./services/api";

//Criação de interface(para o verbo get, para pegar os elementos)
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

//Interface do post(Para tipar os dados que vão ser postados na api)

//interface TransactionInput {
//title: string;
//amount: number;
//type: string;
//category: string;
//}

//type TransactionInput = Omit<Transaction, "id" | "createdAt">;
type TransactionInput = Pick<
  Transaction,
  "title" | "amount" | "type" | "category"
>;

//Criação de interface para que eu possa passar o transactions, como objeto, para que eu possa passar tanto a função como o estado no value do contexto(So que precisa esta tipado)(Formato do contexto)
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

//Criação de contexto
export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

//Interface do contexto
interface TransactionsProviderProps {
  children: ReactNode;
}

//Exportação da função que consome a api e coloca em um estado para guardar as  informações(Criei um componente para que eu não precis passar esta função diretamente no app.tsx para ajudar na organização)
export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    async function Fetch() {
      await api
        .get("/transactions", {
          headers: {
            "Cache-Control": "no-cache",
          },
        })
        .then((response) => setTransactions(response.data.transactions)); //Colocando os daos da api no meu estado
    }
    Fetch();
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([
      ...transactions,
      transaction, //Segunido o conceito de imutabilidade do react, eu quando vou adicionar uma nova informação dentro do vetor(array) eu não simplesmente adiciono outro valor , eu pego os valores ja existentes(...) e adiciono um novo valor no final ou no começo como eu quiser
      //Eu preciso passar data de criação em cada post feito se não da erro, sendo assim => tive que passar dentro do post um objeto com o createdAt, pq no post, eu coloquei como obrigatorio, preencher so os campos(title, amount , categoria , type) então api deveria vir automatico o created at, mas como estou utilizando uma fake, tem que ser assim
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

//Para que eu possa fazer com que todos os meus componentes possam acessar as informações deste contexto , eu tenho que Promover um "provider" e um "consumer" ao redor dele(Que vem neste caso do TransactionsContext)
//Ou seja, se eu quiser que todos os meus componentes possam utilizar estas informações , eu posso ir no app.tsx e envolver todo o contéudo por uma tag Chamada "TransactionContext.Provider" que eu vou exportar daqui e importar lá
//A gente pode restringir , quais componentes a gente quer que tenham acesso a estas informações do contexto, passando apenas o Contexto em volta dos componentes que a gente quer que tenham acesso a esta informações.(Neste caso passei em volta de todos os componentes então todos os componentes vão poder ter acesso a esta informações)
//Por exemplo, se eu quero passar os dados de uma chamada api para dois componentes, sempre mais vale utilizar o contexto, pq passar dados de uma api é mais complexo(Dai eu deixo a chamada da função no arquivo que é mais lógico e passo o contexto para o outro arquivo)

// OBS : Realização de boa prática para caso eu tenha vários contextos(Organização) => é eu transformar este arquivo em tsx e criar um componente onde eu vou passar a função de consumo da api  e a interface que estavão no TransactioTable.tsx, para que eu possa passar as informações através de contexto tanto para o summary quanto para transactioTable.tsx
// Criei um componente para que eu possa restringir a utilização deste contexto entre este meus dois componentes que eu quero passar, para que eu não passe de forma generica para todos , diretamente no value do Contexto, pois se eu tiver vários contextos , esta organização vai me ajudar, para que eu não passe a função de consumo de api diretamente no app.tsx

//Passo a Passo para utilizar esta função:

// 0 - Utilizar o hook createContext para criar o contexto
// 1 - Esta função componente TransactionProvider, esta passando a função de consumo de api e retornando o meu ContextoCriado.Provider
// 2 - Tenho que ir no app.tsx e substituir o <TransactionContext> o contexto que importei lá pelo componente <TransactionsProvider> que foi o que eu crie aqui
// 3 - Resumindo, eu não tenho que exportar o contexto diretamente, mas um componente que retorne o meu contexto criado, assim eu poderei utilizar este componente como um contexto para passar as informações
// 4 - E assim, eu consigo limpar o meu app.tsx, passando a função de consumo de api aqui
// 5 - E no value eu passo o estado Transactions que é onde estão armazenados todos os dados da minha api
// 6 - Então ao invés de eu passar diretamente no app.tsx o contexto criado.Provider, englobando todas as tags e passar a função de consumo de api lá, passando o value da tag diretamente no app.tsx( Eu crio tudo aqui através de um componente e exporto no app.tsx a tag do meu componente englobando tudo como se fosse um contexto)
// 7 - Neste caso, o meu contexto está exportando uma api, sendo assim eu inicializei ele como um array vazio só que como eu passei o value = transactions no meu return, eu tenho que tipar aquele array com a minha interface pq são os valores da minha api, que está tipada tbm no transactions
// 8 - Eu tenho que passar dizendo aqui que o meu Transactions provider pode passar conteudo dentro dele, ou seja, [Children] , que é exatemente o erro que está dando no app.tsx pq não estou passando nada aqui, Ou seja , ele está entendendo que <TransactionsProvider/> é um conteudo igual um componente comum , que se Fecha e não leva nada dentro dele
// 9 - Criar uma inerface Props com um arquivo children para dizer que este meu componente pode receber conteudo dentro dele => Sempre que for utilizar o children na interface do react , tipe ela como (React.Node; que eu estou dizendo que está children aceita qualquer componente do react, seja jsx,texto direto etc...)
// 10 - Passar a children Criada dentro do contexto
// 11 - Conclusão => Criar contextos separadamente em componentes, passando na função o que voce quer passar para os componentes que vão consumir este contexto e retornando o contexto criado, para que este seu componente vire um contexto

//Obs => Utilização do children no jsx =>
// 1 - Eu nao precisaria criar uma interface para tipar o Children,so precisaria passa-lo como props children e depois colocalo entre as tags do contexto como fiz acima

//Passo a Passo sobre passar a rota de post que estava no newTransaction modal para o contexto, para que eu possa alterar os valores postados e renderizar em tela

//1 - Trazer a função de post dentro de uma função aqui neste arquivo
//2 - substituir o array de data que eu tinha, pela variavel "transaction" no axios da api
//3 - Criar uma interface para tipar esta variavel, e não pode ser a mesma interface que eu utilizei no get(Pq se não ele iria pedir para o usuário digitar a hora que foi criado e o id tbm , por isso vou criar uma interface so com os campos dos inputs)
//4 - na interface dos inputs, eu não passei desetructuring eu passei direto no parenteses a tipagem, pq eu quero tipar aquele parametro que eu criei
//5 - na interface do get, eu utilizei o desestructuring , pq eu quero pegar as variaveis que eu setei na interface e não tipar um parametro
//6 - optei pela opção de tipar através de type, utilizando herança da interface do get através do "omit"(Função top do typeScript)(Omitindo somente os campos que eu nao quero no post , "id" e "createdAt")optei por um formato de objeto, mas poderia ter colocado diretamente fora do objeto ja que so tem um elemento
//7 - também posso utilizar o pick, no lugar do omit, repare que o omit, pega a herança e omite os campos que você não quer pegar, porem , o pick voce escolhe os campos que você quer pegar de herança
//8 - Preciso retornar a função create no value do meu contexto, para que eu possa acessar ele no meu arquivo de modal

//9 - Como passar mais de um elemento seja função ou variavel no value do context? => quando eu quero passar uma função e um objeto por exemplo, no value do contexto, eu tenho que criar uma nova interface, tipando o objeto que eu quero passar,que neste caso era a função de post e a variavel do estado "transactions"
//10 - Agora aquele conexto na função de create context. vai recebr esta interface como tipagem e não mais (<Transaction>[]) pq ela não é somente mais um array de transactions, mas tbm uma função.
//11 - não passo mais ele como um array , passo so a tipagem <> e depois um "alias" para corrigir o bug ({} as TransactionsContextData) para forçar a tipagem
//12 - Quando uma função minha é assicrona, ela deve ser tipada no javscript como uma "Promise" (Promise<void>)
