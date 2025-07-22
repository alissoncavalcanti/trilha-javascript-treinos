/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível (por litro);
2 - Gasto médio de combustível do carro por KM (em litros  por KM);
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

let precoLitro
let litroPorKm
let distanciaKm

precoLitro = 0.45;
litroPorKm = 1.30;
distanciaKm = 200;

let litros = distanciaKm / litroPorKm;
let custoViagem = precoLitro*litros;

console.log(custoViagem.toFixed(2))