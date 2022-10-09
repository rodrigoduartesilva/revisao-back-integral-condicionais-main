const nota = 8.5;


if(nota >= 9){
    console.log(`O estudante obteve conceito A - Nota: ${nota}`);
} else if(nota < 9 && nota >= 8){
    console.log(`O estudante obteve conceito B - Nota: ${nota}`);
} else if(nota < 8 && nota >= 6){
    console.log(`O estudante obteve conceito C - Nota: ${nota}`);
} else if(nota < 6 && nota >= 4){
    console.log(`O estudante obteve conceito D - Nota: ${nota}`);
} else {
    console.log(`O estudante obteve conceito E - Nota: ${nota}`);
}