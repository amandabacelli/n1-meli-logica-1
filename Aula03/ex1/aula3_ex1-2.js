//1.2 informe também a altura média destes 5 atletas. 

let height, media, cont, soma
cont = 0
soma = 0

while (cont<5){
    height = parseFloat(prompt("Digite a altura"))
    soma = soma + height //ou altura2 += altura (troca a sentença toda)
    media = ((soma)/5)
    cont++

}alert(`A media das alturas é ${media}`)