import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";

 const cliente = new Cliente(`Rafael`, `11122233345`);
 const contaCorrente = new ContaCorrente(`01`, cliente);

 contaCorrente.depositar(1000);

////////////////////////////////////////////

 const cliente2 = new Cliente(`Bruna`,`131313131313`);
 const contaCorrente2 = new ContaCorrente(`02`, cliente2);
 
 contaCorrente2.depositar(3000);

contaCorrente2.transferir(1000, contaCorrente);
