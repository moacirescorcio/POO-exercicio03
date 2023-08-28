//media, minimo e maximo
const array = [1,2,3,4,5];

const somatorio = array.reduce((soma,itens) => soma + itens,0);


//minimo
const minimo = array.reduce((min, itens) => Math.min(min, itens), array[0]);


//maximo
const maximo = array.reduce((max, itens) => Math.max(max, itens),array[0]);

let resumo = {
    Maximo: maximo,
    Minimo: minimo,
    Media: somatorio/2,
}


console.log(resumo);




