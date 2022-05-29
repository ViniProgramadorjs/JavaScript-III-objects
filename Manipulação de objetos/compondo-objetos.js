//DESAFIO - Compondo um objeto: Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1231232321",
    email:"andre@email.com",
    fones:["5591123232","5521988768"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"10/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva"

console.log(cliente);