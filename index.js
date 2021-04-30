//ao escrever no console a primeira letra deve ser maiuscula 
//escolha um produto

   var g = 2;
var h = 5;
while(g < 1){

console.log("escolha uma versão porém escreva certo")
console.log("")
console.log("Rima vitae")
console.log("")
 console.log("")
console.log("Rima vitae deluxe")
console.log("")
console.log("Rima vitae gold")
console.log("")

var expr = prompt("qual versão?");

switch (expr) {
  case 'Rima vitae':
  console.log("Custa: R$99,99");
   break
   case 'Rima vitae deluxe':
   console.log("custa: R$199,99");
   break
   case 'Rima vitae gold':
   console.log("custa: R$149,99");
   break
};
console.log(" ")

for(var expf = prompt("quantas unidades?"); expr <= 3; expr++){console.log(expr)}

console.log(" ")

if (expf > 3) {
 console.log("Não temos unidades suficientes")
}

else{
  var RM = prompt("deseja parcela?")
    console.log(" ");

if (RM.toLowerCase() == 'Sim'){
  prompt("Então a forma de pagamento é cartão de credito certo?")
}
else {

  prompt("Então a forma de pagamento é cartão de debito certo?")

  }

//não coloque informações reais

console.log(" ")

var cartão = prompt("numero do cartão:")
console.log(" ")
var cartão = prompt("vencimento do cartão:")
console.log(" ")
var cartão = prompt("cvv do cartão:")
console.log(" ")
var cartão = prompt("senha do cartão:")
console.log(" ")

 

console.log(" ")
console.log("Numero da compra")
console.log("2645161")
console.log(" ")
var expz = prompt("confirme o numero da compra:");

if (expz == 2645161){
    console.log(" ")
  console.log("compra validada")
  console.log(" ")

  const numeros = [19452, 13264, 14632];

  let index = 0;
 
  while (index < numeros.length){
    console.log('suas keys %s; ', numeros[index]);
    index++;}

  console.log(" ")
console.log("keys restantes:")
console.log(" ")
console.log(3-expf)
 
do {
  console.log("obrigado por compra conosco!")
} while(expz === 2645161)

}

else if (expz != 2645161){
  console.log("compra invalidada")
  do {
  console.log("volte mais tarde!")
} while(expz === 2645161 )
}




}

}