function exibir(...letras: string[]){
    let soma = ''
    for(let item of letras){
        soma += item + ', '
    }

    return soma
}

console.log(exibir('a', 'b'));
console.log(exibir('a', 'b', 'c'));
console.log(exibir('a', 'b', 'c', 'd'));
