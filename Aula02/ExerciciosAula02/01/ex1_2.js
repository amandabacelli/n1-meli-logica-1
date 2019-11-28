//1.2. Faça o mesmo programa anterior, agora com 3 palpites.

/**
 * Inserir u
 * 
 */

const num1 = parseInt(prompt("Tente a sorte, digite um numero de 1 a 10 (^o^)/"));

const sorte = Math.floor(Math.random() * 10 + 1); //*10 indica q o limite dos numeros sorteados será 10 e o +1 é pra nao pegar o zero

//primeira tentativa
if (num1 == sorte) {
    alert(`Numero sorteado: ${sorte} - You Win! (ノ^o^)ノ`)
    console.log(`numero sorteado: `, sorte) //imprime noconsole o numero que foi sorteado
} else {
    if (sorte > num1) {
       console.log(`numero sorteado: `, sorte) //imprime noconsole o numero que foi sorteado
       alert(`O numero sorteado é maior do que o inserido: ${num1}`)
       const num2 = parseInt(prompt(`digite outro numero`))
    } else {
        alert(`O numero sorteado é menor do que o inserido: ${num1}`)    
        const num2 = parseInt(prompt("digite outro numero"))
            console.log(`numero sorteado: `, sorte) //imprime noconsole o numero que foi sorteado
            if(num2==sorte){
                alert(`Numero sorteado: ${sorte} - You Win! (ノ^o^)ノ`)
            }else{
                 if(sorte>num2) {
                    alert(`O numero sorteado é menor do que o inserido: ${num2}`)   
                    const num3 = parseInt(prompt("digite outro numero"))
                    } else{
                        alert(`O numero sorteado é menor do que o inserido: ${num2}`) 
                        const num3 = parseInt(prompt("digite outro numero"))
                    }if(num3==sorte){
                        alert(`Numero sorteado: ${sorte} - You Win! (ノ^o^)ノ`)
                        } else {
                            alert(`Numero sorteado: ${sorte} - You Lose! (ㄒoㄒ)`)
                        }
                    }
                                           
                }
                
            } 
