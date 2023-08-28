function saudacao(nome: string, pronome: string = "Sr."): string{
    let frase = pronome + ' '+ nome;
    return frase;
}

console.log(saudacao("Moacir", "Sr."));
console.log(saudacao("Sávia", "Sra."));
console.log(saudacao("Moacir"));
