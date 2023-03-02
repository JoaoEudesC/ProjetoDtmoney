import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import { App } from "./App";

//Estou utilizando o this.namespace = "api"; pq la na url que eu defini , eu coloquei "api" no segundo parenteses, então eu estou dizendo que minha requisição vai vir a partir de api para frente, ou seja transactions
//No return eu crio os dados que seriam um possivel retorno da minha fakeApi, passando o verbo http e passando a minha rota (Utilizamos a fake api quando queremos testar nossa aplicação mas ainda não possuimos um backend feito e formado)
createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "food",
          createAt: new Date(),
        },
      ];
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
