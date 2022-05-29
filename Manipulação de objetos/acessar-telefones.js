//DESAFIO - Lista de telefone: Acessar a lista de números de telefones das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro.

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1231232321",
    email:"andre@email.com",
    fones:["5591123232","5521988768"]
}

cliente.fones.forEach(fone => console.log(fone));
//Sendo forEach sem retorno e executando loop, o loop pra cada fone.
