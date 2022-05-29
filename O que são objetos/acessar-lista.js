//DESAFIO: Consultar um objeto utilizando uma lista de chaves relativas a informação de clientes gerada pelo sistema e pintar o resultado na tela

const cliente = {
    nome:"Andre",
    idade:"36",
    cpf:"123123123",
    email:"andre@email.com"
}
               //0      //1
const chaves = ["nome","idade","cpf","email"];

//console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));

// Dá Certo também console.log(cliente["nome"]);