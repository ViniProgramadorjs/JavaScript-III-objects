//DESAFIO - Oferta de seguro:Percorrer um objeto, verificar se existe a chave `dependentes` e, caso exista, enviar uma mensagem de oferta de seguro.

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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes .includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.entries(cliente));
console.log(Object.values(cliente));
oferecerSeguro(cliente);

//includes serve pra encontrar dentro do array a palavra nesse caso 'dependetes', sempre retorna true ou false.