const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

if(aposentada){
    console.log(`ISENTA -> Aposentado(a).`);
} else if(portadoraDeDoenca){
    console.log(`ISENTA -> Portador de doença grave.`);
} else if(totalDeRendimentos > 2855970){
    console.log(`PEGA LEAO -> Rendimento: R$ ${(totalDeRendimentos/100).toFixed(2)}`);
} else {
    console.log(`VAZA LEAO! JA TA DIFICIL SEM VOCE.`);
}