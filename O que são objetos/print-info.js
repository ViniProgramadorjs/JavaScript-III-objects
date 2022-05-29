//Desafio: Acessar um objeto com informações de um cliente e exibir essas informações no console.

const cliente = {
    nome:"Andre",
    idade:"36",
    cpf:"123123123",
    email:"andre@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(cliente.cpf.substring(0,3));
