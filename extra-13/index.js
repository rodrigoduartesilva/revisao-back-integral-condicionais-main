//tipo de pagamento (dinheiro, credito, debito, cheque).
let tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorAPagar = 0;

if(tipoDePagamento === "credito"){
    valorAPagar = (valorDoProduto - (valorDoProduto * 0.05)) / 100;
    console.log(`Forma de Pagamento: ${tipoDePagamento.toUpperCase()}`);
    console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
} else if(tipoDePagamento === "cheque"){
    valorAPagar = (valorDoProduto - (valorDoProduto * 0.03)) / 100;
    console.log(`Forma de Pagamento: ${tipoDePagamento.toUpperCase()}`);
    console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
} else if(tipoDePagamento === "debito"){
    valorAPagar = (valorDoProduto - (valorDoProduto * 0.1)) / 100;
    console.log(`Forma de Pagamento: ${tipoDePagamento.toUpperCase()}`);
    console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
} else if(tipoDePagamento === "dinheiro"){
    valorAPagar = (valorDoProduto - (valorDoProduto * 0.1)) / 100;
    console.log(`Forma de Pagamento: ${tipoDePagamento.toUpperCase()}`);
    console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
} else {
    tipoDePagamento = "???????";
    console.log(`Forma de Pagamento: ${tipoDePagamento}`);
    console.log(`Pagamento inválido.`);
}