import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";

const cliente1 = new Cliente();
const contaCorrente1 = new ContaCorrente();

cliente1.nome = `Rafael`;
cliente1.cpf = `11122233345`;

contaCorrente1.agencia = `01`;
contaCorrente1.depositar(1000);
contaCorrente1.cliente = cliente1;

console.log(contaCorrente1);



