// DESAFIO - Lista de dependetes: Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente.

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1231232321",
    email: "andre@email.com",
    fones: [ "5591123232","5521988768" ],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "10/03/2011"
    }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014");

console.log(filhaMaisNova[0].nome);
//filter sempre vai retornar dentro de um novo Array, mesmo se ele não encotrar nada retorna um Array vazio.