/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol (por litro);
2 - Preço da gasolina (por litro);
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM (em litros  por KM);
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

let precoEtanol
let precoGasolina
let tipoCombustivel
let litroPorKm
let distanciaKm

precoEtanol = 0.30
precoGasolina = 0.45

tipoCombustivel = 'Gasolina'
litroPorKm = 1.30

distanciaKm = 180

let litros = distanciaKm / litroPorKm
let custoViagem

if (tipoCombustivel === 'Etanol') {
    custoViagem = precoEtanol * litros
    console.log(custoViagem.toFixed(2))
}

else if (tipoCombustivel === 'Gasolina') {
    custoViagem = precoGasolina * litros
    console.log(custoViagem.toFixed(2))
}

