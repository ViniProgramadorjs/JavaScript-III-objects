//DESAFIO - Puxando relatório: Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco.

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1231232321",
    email: "andre@email.com",
    fones: [ "5591123232","5521988768" ],
    dependentes: [
        {  
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "10/03/2011"  },
        { 
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014"
        }
    ],
    saldo:100,
    depositar:function(valor){ 
        this.saldo += valor
    }
}     

let relatorio="";

for ( let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    }else{
        relatorio += ` 
        ${info} ==> ${cliente[info]} 
        `
    }
     
}

console.log(relatorio);

//typeof  desvendar o tipo de dado
// ||: Ou, === : Igual