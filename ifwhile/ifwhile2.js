//Escreva um programa que passe por todos os números de 1 a 50 
//e para cada um deles imprima na tela se o número é par ou ímpar.
//Caso o númerotambém seja primo, o programa deve dizer que ele é primo. 
//(um número primo é umnúmero que só é divisível por ele mesmo e por 1). 
//Dica: Neste exercício você podeprecisar de ajuda do operador MÓDULO (%).
//Você também pode precisar criar mais deum loop.EX.:1 
//ÍMPAR PRIMO2 PAR PRIMO3 ÍMPAR PRIMO4 PAR5 ÍMPAR PRIMO6 PAR7 ÍMPAR PRIMO8 PAR9 ÍMPAR10 PAR

var numero = 1

while (numero <= 50) {
    if (numero == 2){
        console.log(numero + " PAR PRIMO")
    }
    else if (numero % 2 == 0) {
        console.log(numero + " PAR")
    


    }
    if (numero % 2 != 0) {
    
        var temdivisor = false
        for (i = 2; i < numero; i++) {
            if (numero % i == 0) {
                temdivisor = true
            }
        }  
        if (temdivisor == false) {
          console.log(numero + " ÍMPAR PRIMO")
        }
        else console.log(numero + " ÍMPAR")
    }
    numero++
}