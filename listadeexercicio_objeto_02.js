/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura*altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de latura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {
    constructor (nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
}
    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
        return ("Seu IMC é de " + imc.toFixed(1) + " e você está abaixo do peso.");
        } else if (imc >= 18.5 && imc < 25) {
        return ("Seu IMC é de " + imc.toFixed(1) + " e você está com peso normal.");
        } else if (imc >= 25 && imc < 30) {
        return ("Seu IMC é de " + imc.toFixed(1) + " e você está acima do peso.");
        } else if (imc >= 30 && imc < 40) {
        return ("Seu IMC é de " + imc.toFixed(1) + " e você está obeso.");
        } else {
        return ("Seu IMC é de " + imc.toFixed(1) + " e você está com obesidade grave.");
        }
    }
}

const alisson = new Pessoa ('Alisson', 50, 1.6)
console.log (alisson.classificarIMC())

const jose = new Pessoa ('Jose', 70, 1.75)
console.log (jose.classificarIMC())