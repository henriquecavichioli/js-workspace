 const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
 );
 console.log("Destinos possíveis:");
 console.log(listaDeDestinos);

 listaDeDestinos.push(`Curitiba`);
 console.log(listaDeDestinos);
 listaDeDestinos.splice(3, 1);
 console.log(listaDeDestinos);
 console.log(listaDeDestinos[2]);
