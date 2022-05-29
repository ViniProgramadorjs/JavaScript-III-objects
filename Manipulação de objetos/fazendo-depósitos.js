//DESAFIO - Fazendo depósitos: Adicionar uma prorpiedade que permita "ações," para que os clientes que estão cadastrados consigam fazer operações bancárias.

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
    depositar:function(valor)
    {
        this.saldo += valor
    }
}  

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);