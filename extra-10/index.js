const caractere = "E";


if(caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U"){
    console.log(`Vogal maiúscula - ${caractere}`);
} else if(caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u"){
    console.log(`Vogal minuscula - ${caractere}`);
} else if(caractere >=0 && caractere < 10){
    console.log(`Número - ${caractere}`);
} else {
    console.log(`Consoante - ${caractere}`);
}