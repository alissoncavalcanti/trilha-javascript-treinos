/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoNormal = 50;
const tipoPagamento = 'Crédito';
const vezesCredito = 3;

if ( tipoPagamento === 'Débito') {
    const precoFinal = precoNormal * 0.9
    console.log('O preço final é de ' + precoFinal.toFixed(2) )
}
else if ( tipoPagamento === 'Dinheiro' || tipoPagamento === 'PIX' ) {
    const precoFinal = precoNormal * 0.85
    console.log('O preço final é de ' + precoFinal.toFixed(2) )
}
else if ( tipoPagamento === 'Crédito' && vezesCredito <= 2) {
    const precoFinal = precoNormal
    console.log('O preço final é de ' + precoFinal.toFixed(2))
}
else {
    const precoFinal = precoNormal * 1.1
    console.log('O preço final é de ' + precoFinal.toFixed(2))
}