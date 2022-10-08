const jogada1 = "papel";
const jogada2 = "tesoura";

if(jogada1 === "pedra" && jogada2 === "pedra"){
    console.log(`Empate - Ambos jogaram ${jogada1}`);
} else if(jogada1 === "pedra" && jogada2 === "tesoura"){
    console.log(`A jogada vencedora é a jogada1 - ${jogada1} --- jogada2 - ${jogada2}`);
} else if(jogada1 === "tesoura" && jogada2 === "papel"){
    console.log(`A jogada vencedora é a jogada1 - ${jogada1} --- jogada2 - ${jogada2}`);
} else if(jogada1 === "papel" && jogada2 === "pedra"){
    console.log(`A jogada vencedora é a jogada1 - ${jogada1} --- jogada2 - ${jogada2}`);
} else {
    console.log(`A jogada vencedora é a jogada2 - ${jogada2} --- jogada1 - ${jogada1}`);
}