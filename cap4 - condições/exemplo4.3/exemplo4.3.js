const prompt = require("prompt-sync")();

const bairro = prompt("Bairro de entrega: ");

let taxaDeEntrega

switch (bairro) {
  case "Centro":
    taxaDeEntrega = 5.00
    break
  case "Icarai":
  case "Santa Rosa":
    taxaDeEntrega = 7.00
    break
  
  case "São Francisco":
    taxaDeEntrega = 9.00
    break
  default:
    taxaDeEntrega = 8.00
}

console.log(`Taxa de entrega: ${taxaDeEntrega.toFixed(2)}`);