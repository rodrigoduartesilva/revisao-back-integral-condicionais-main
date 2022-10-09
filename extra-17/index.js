//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 30000/100;

const valorDaParcela = ((100000/100) / 10).toFixed(2);

const parcelasRestantes = quantidadeDoParcelamento - (valorPago/valorDaParcela);

console.log(`Restam ${parcelasRestantes} parcelas de R$ ${valorDaParcela}.`);