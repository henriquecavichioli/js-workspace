import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    _saldo = 0;

    get cliente() {
        return this._cliente;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        } else {
            console.log(`Voce nao pode atribuir este valor ao atributo cliente.`);
        }
    }

    get saldo() {
        return this._saldo;
    }
    
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

    transferir(valor, contaDestino) {
        let valorTransferir = this.sacar(valor);
        contaDestino.depositar(valorTransferir);
        console.log(`${valor} transferido com sucesso.`);
        }
    }
