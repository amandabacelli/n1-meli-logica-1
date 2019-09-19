/**1. Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.

    1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.

    1.2. Faça o mesmo programa anterior, agora com 3 palpites. */

    /**
     INICIO
        receber numero do usuario
        num1 = numeroRecebido
        sorte = numeroRandomico
        se num == sorte
            retorna You Win! (ノ^o^)ノ
        se não 
            num2 = numeroRecebido
            se num2 == sorte
                retorna You Win! (ノ^o^)ノ
            senão
                retorna You Lose! Try again (ง •̀ω•́)ง✧ */

const num1 = parseInt(prompt("Tente a sorte, digite um numero de 1 a 10 (^o^)/"));

const sorte = Math.floor(Math.random()*10+1); //*10 indica q o limite dos numeros sorteados será 10 e o +1 é pra nao pegar o zero

//primeira tentativa
if(num1==sorte) {
    alert(`Numero sorteado: ${sorte} - You Win! (ノ^o^)ノ`)
     } else {
         //dar a segunda tentativa
         const num2 = parseInt(prompt("Tente novamente (･ω･)v, digite um numero de 1 a 10 "))
         console.log(`sorte dentro else: `, sorte) //imprime noconsole o numero que foi sorteado
         if(num2==sorte) {
            alert(`Numero sorteado: ${sorte} - You Win! (ノ^o^)ノ`)            
         } else {
            alert(`Numero sorteado: ${sorte} - You Lose! (ㄒoㄒ)`)
         }

     }

