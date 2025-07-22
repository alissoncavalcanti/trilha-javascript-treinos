/*
Crie um programa que dado um número imprima a sua tabuada
*/

const numero = 9;
let incremento = 0;

for (let i = 0; i < 10; i++) {
    incremento = incremento + numero;
    console.log(numero + " x " + (i + 1) + " = " + incremento);
}