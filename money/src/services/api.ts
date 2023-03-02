//Serviço de dados é aqui que eu vou colocar o axios para fazer as requisições http
//Irei importar esta variavel lá no componente que eu estou utilizando o fetch e vou substituir o fetch pelo nome api.verbo(Url) , so com o final , pq o corpo ja esta aqui(/transactions) e eu posso remover o then que está utilizando a resposta em json e deixar so um then
//O unico then que vamos utilizar é este => .then((response) => console.log(response.data));
import axios from "axios"

export const api = axios.create({
    baseURL:'http://localhost:3000/api',
    
})




