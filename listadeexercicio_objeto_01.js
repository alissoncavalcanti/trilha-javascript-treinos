/*
1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado. Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso
*/

class Carro {
    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }
    gastoViagem(distancia, precoCombustivel) {
        return distancia * precoCombustivel * this.gastoPorKm
    }
}

const uno = new Carro('Volkswagen', 'Preto', 1/12);
console.log(uno.gastoViagem(70, 5));

