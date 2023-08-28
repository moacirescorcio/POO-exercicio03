"use strict";
//Crie um exemplo usando a função map para dobrar os elementos de um array e reduce para totalizar a soma dos elementos do array.
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const duplicado = numeros2.map((itens) => itens * 2);
console.log(duplicado);
const reduzido = numeros2.reduce((soma, itens) => soma + itens, 0);
console.log(reduzido);
