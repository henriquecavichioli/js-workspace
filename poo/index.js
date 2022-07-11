class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {

        if (this.saldo >= valor) {
            console.log
        }

    }
}

const cliente1 = new Cliente();
const contaCorrenteRicardo = new ContaCorrente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;


console.log(cliente1);