export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0;

    sacar(valor) {

        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`Saque de ${valor} efetuado com sucesso.`)
            console.log(`Seu novo saldo é: ${this._saldo}`);
            return valor;
        } else {
            console.log("Saque indisponível");
            console.log(`Seu saldo é: ${this._saldo}`);

        }


    }

    depositar(valor) {

        if (valor > 0) {
            this._saldo += valor;
            console.log(`Deposito de ${valor} realizado com sucesso.`);
            console.log(`Seu novo saldo é: ${this._saldo}`);

        } else {
            console.log("Não é possível depositar este valor.");
        }
    }
}