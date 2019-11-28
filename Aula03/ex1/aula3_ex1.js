/**1. Escreva um programa que solicita o nome e a altura de 5 atletas. 
 * Ao final da entrada de dados, informe A ALTURA do atleta mais alto */

 let cont,name, height, name2, max
 max = 0
 name2 = ""
 cont = 0
 

 
 while(cont <5){
    name = prompt("Digite seu nome")
    height = parseFloat(prompt("Digite sua altura"))
    console.log('cont: ', cont)

    if(height>max){
        max = height    
        name2 = name   
    }
    
    cont = cont + 1
          
 }alert(`A maior altura é ${max} da atleta ${name2}`)
 
 
 
