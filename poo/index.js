import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";

// const cliente = new Cliente();
// const contaCorrente = new ContaCorrente();

// cliente.nome = `Rafael`;
// cliente.cpf = `11122233345`;

// contaCorrente.agencia = `01`;
// contaCorrente.depositar(1000);
// contaCorrente.cliente = cliente;

////////////////////////////////////////////

 const cliente2 = new Cliente();
 const contaCorrente2 = new ContaCorrente();

 cliente2.nome = `Bruna`;
 cliente2.cpf = `131313131313`;

 contaCorrente2.agencia = `02`;
 contaCorrente2.depositar(3000);
 contaCorrente2.cliente = new Cliente();

 console.log(contaCorrente2._cliente);
 
//  contaCorrente2.transferir(1000, contaCorrente);
