"use strict";
function ArrayEmString(array) {
    let stringFinal = '';
    for (let i = 0; i < array.length; i++) {
        stringFinal = stringFinal + ' - ' + array[i];
    }
    return stringFinal;
}
console.log(ArrayEmString([1, 2, 3, 4, 5]));
