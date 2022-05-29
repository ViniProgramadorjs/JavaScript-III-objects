class Cliente{
        constructor(nome,email,cpf,saldo){ 
            this.nome = nome
            this.email = email
            this.cpf = cpf
            this.saldo = saldo
        }
         //metodos(depositar,exibirSaldo) são funcões que execultam no contexto de um objeto,em class não precisa escrever a palavra funtion.
        depositar(valor){
            this.saldo += valor
        }

        exibirSaldo(){
            console.log(this.saldo);
        }
}    

const andre = new Cliente("Andre","andre@email.com","1113123123",100)

andre.exibirSaldo();

andre.depositar(100);

console.log(andre);