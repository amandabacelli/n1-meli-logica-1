/**1.3 não restrinja a entrada de dados a apenas 5 atletas. 
 * Agora após a inclusão de cada atleta o programa deve perguntar ao usuário se deseja incluir outro. 
 * A resposta é dada com (S/N). O programa continua mostrando o nome do mais alto, 
 * e a altura média. */

let cont,name, height, name2, max, resp, sim
max = 0
name2 = ""
cont = 0
sim = 1

resp = parseInt(prompt("Deseja inserir uma atleta? Digite 1 para Sim e 2 para não"))

while(resp==sim){
   name = prompt("Digite seu nome")
   height = parseFloat(prompt("Digite sua altura"))
   resp = parseInt(prompt("Deseja inserir uma atleta? Digite 1 para Sim e 2 para não"))
       if(height>max){
           max = height    
           name2 = name  
    } 
       cont++
   } alert(`A maior altura é ${max} da atleta ${name2}`)
