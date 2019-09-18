//Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10

//receber um numero, o usuario vai digitar o dado no console
//função prompt ('digite um numero ') igual o scanner do java para aparecer a msg pro usuario digitar ele recebe como string
//concatenar = juntar duas coisas usa o +
//para aparecer a mensagem resposta para o usuário usa o alert (`${variavel recebida} mensagem`)


/* 
INICIO
    receber um numero
    se numero > 10
        "numero maior que 10"
    se não
    "Numero não é maior que 10"
    //se retornar um NaN = not a number (não é  um numero)
FIM
*/

const n1 = parseInt(prompt("Digite um número qualquer")) //parseint torna oq eu escrever no promp em numero
if (n1 > 10) {
    alert(`${n1} numero é maior que 10`)
} else {
    
    if (n1 === 10) { //=== ele verifica o título da variavel alem do valor o prompt recebe como string, tem q converter
        alert(`${n1} numero é igual a 10`)
    } else {
        alert(`${n1} não é maior do que 10 ou igual a 10`)
    }
}
