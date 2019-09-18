//2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.

/*
INICIO
    receber num1
    receber num2
    informar o maior
FIM
*/
const num1 = parseInt(prompt("Digite o primeiro numero"))
const num2 = parseInt(prompt("Digite o segundo numero"))

if(num1>num2) {
    alert(`O numero ${num1} é maior`)
}else{
    if (num1===num2)
    alert(`O numero ${num1} é igual a ${num2}`)
    else{
        alert(`O numero ${num2} é maior`)
    }
    
}