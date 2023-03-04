import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { App } from "./App";

//Estou utilizando o this.namespace = "api"; pq la na url que eu defini , eu coloquei "api" no segundo parenteses, então eu estou dizendo que minha requisição vai vir a partir de api para frente, ou seja transactions
//No return eu crio os dados que seriam um possivel retorno da minha fakeApi, passando o verbo http e passando a minha rota (Utilizamos a fake api quando queremos testar nossa aplicação mas ainda não possuimos um backend feito e formado)
createServer({
  //O mirage possui um banco de dados interno que a gente pode utilizar usando o models
  models: {
    //pq eu preciso que a rota de get e de post estejam interligadas, pq os dados que eu colocar no post, quando eu utilizar o get ela vai ser utilizada(So estamos fazendo isso pq não temos api ainda , é uma faek api)
    //Primeiro schema de tabela do nosso banco(A gente tem que tipar esta transaction com o Model)
    transaction: Model,
  },

  //Função que vai fazer com que eu consiga iniciar o banco de dados com alguns dados já cadastrados nela(o Parametro transactions que eu passei ali , nada mais é do que o nome do meu model no plural)
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "freelancer de website",
          type: "deposit",
          category: "Dev",
          amount: 7000,
          createdAt: new Date("2021-18-04 06:00:00"),
        },
        {
          id: 2,
          title: "Backender",
          type: "withdraw",
          category: "Dev",
          amount: 5400,
          createdAt: new Date("2021-15-06 07:00:00"),
        },
        {
          id: 3,
          title: "Gestor",
          type: "deposit",
          category: "Gestão",
          amount: 8000,
          createdAt: new Date("2021-10-09 04:00:00"),
        },
        {
          id: 4,
          title: "Tech lead",
          type: "withdraw",
          category: "Dev",
          amount: 6500,
          createdAt: new Date("2022-09-110 15:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction"); //Substitui o Schema que tinha feito a mão, para coincidir com os dados postados na rota de post, para quando eu der um get, eu consegui pegar os dados da rota de post
    });

    //Eu tenho que passar obrigatoriamente estes dois parametros para serem utilizados(e abaixo é como eu acesso os dados que vem dessa requisição) e devo passar estes dados para o formato Json
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data); //Este Schema é o meu banco de dados, então eu passo minha tabela ou collection , e o meu schema de dados que é o data
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//O banco de dados ele vai sempre começar vazio, existe uma forma de eu deixar dados já pré cadastrados no banco(Para que o banco de dados já inicie com alguns dados para que a gente fique com a interface mais amigável)
