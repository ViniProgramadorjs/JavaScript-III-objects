//DESAFIO - Lista dependentes: Extrair de uma listagem de clientes apenas as informações de dependentes e mentor uma lista única, para análise de outros departamentos do banco.

const clientes = [
    {
        nome: "Andre",
        idade: 36,
        cpf: "1231232321",
        email: "andre@email.com",
        fones: [ "5591123232","5521988768" ],
        dependentes: [{ 
        
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "10/03/2011"  
            },
            { 
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014"
        }],
    },
    {  
        nome: "Juliana",
        cpf: "567665765666",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDepedentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.log(listaDepedentes);
console.table(listaDepedentes);

//... operador de espalhamento