//5. Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10.

/*
INICIO
    receber um numero
    verificar se eh multiplo de 10
*/

const num5 = parseInt(prompt("Digite um numero "))

if (num5 % 10 === 0){
    alert(`O numero ${num5} é multiplo de 10`)
}else {
    alert(`O numero ${num5} não é multiplo de 10`)
}
