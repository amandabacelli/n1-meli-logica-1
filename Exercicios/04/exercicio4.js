//4. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

/*
INICIO
    receber um numero
    verificar se é par ou impar
*/

const num4 = parseInt(prompt("Digite um numero"))

if (num4 % 2==0) {
    alert(`O numero ${num4} é PAR`)
}else {
    alert(`O numero ${num4} é IMPAR`)
}