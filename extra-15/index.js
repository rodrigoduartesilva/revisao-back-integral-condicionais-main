const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if(!primeiroNome){
    console.log("Informe o primeiro nome!");
} else if(apelido){
    console.log(apelido);
} else if(sobrenome){
    console.log(primeiroNome + " " + sobrenome);
} else {
    console.log(primeiroNome);
}