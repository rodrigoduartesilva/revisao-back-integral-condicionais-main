const ladoA = 6;
const ladoB = 6;

if(ladoA === ladoB){
    console.log("É bucha!!");
    if(ladoA === 0){
        console.log("Branco");
    } else if(ladoA === 1){
        console.log("Ás");
    } else if(ladoA === 2){
        console.log("Duque");
    } else if(ladoA === 3){
        console.log("Terno");
    } else if(ladoA === 4){
        console.log("Quadra");
    } else if(ladoA === 5){
        console.log("Quina");
    } else if(ladoA === 6){
        console.log("Sena");
    } else {
        console.log("Valor não encontrado.");
    }
} else{
    console.log("Não é Bucha!!");
    console.log(`Lado A: ${ladoA} --- Lado B: ${ladoB}`);
}