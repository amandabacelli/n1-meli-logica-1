//1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, 
//mas informa se o número sorteado é maior ou menor que o primeiro palpite.
/**
     INICIO
        receber numero do usuario
        num1 = numeroRecebido
        sorte = numeroRandomico
        se num == sorte
            retorna You Win! (ノ^o^)ノ
        se não 
            se
            verifica se o numero sorteado é menor ou maior que o primeiro palpite
            num1>sorte
            retorna: num1 é maior que sorte
            senão
                retorna num1 é menor que sorte
            num2 = numeroRecebido
            se num2 == sorte
                retorna You Win! (ノ^o^)ノ
            senão
                retorna You Lose! Try again (ง •̀ω•́)ง✧ */

const num1 = parseInt(prompt("Tente a sorte, digite um numero de 1 a 10 (^o^)/"));

const sorte = Math.floor(Math.random() * 10 + 1); //*10 indica q o limite dos numeros sorteados será 10 e o +1 é pra nao pegar o zero

//primeira tentativa
if (num1 == sorte) {
    alert(`Numero sorteado: ${sorte} - You Win! (ノ^o^)ノ`)
    console.log(`numero sorteado: `, sorte) //imprime noconsole o numero que foi sorteado
} else {
    if (num1 > sorte) {
        const num2 = parseInt(prompt(`O numero ${num1} é maior do que o sorteado, digite outro numero`))
        console.log(`numero sorteado: `, sorte) //imprime noconsole o numero que foi sorteado
    } else {
            const num2 = parseInt(prompt(`O numero ${num1} é menor do que o sorteado, digite outro numero`))
            console.log(`numero sorteado: `, sorte) //imprime noconsole o numero que foi sorteado
            if(num2!=sorte){
                alert(`Numero sorteado: ${sorte} - You Lose! (ㄒoㄒ)`)
            } else {
                alert(`Numero sorteado: ${sorte} - You Win! (ノ^o^)ノ`)
            }
        }

    }
