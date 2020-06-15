

//Escreva um programa para ler 3 valores inteiros 
//(considere que  nãoserão lidos valores iguais) 
//e escrevê-los em ordem crescente


var rs = require("readline-sync")
var numero1= rs.question("primeiro valor")
var numero2= rs.question("segundo numero")
var numero3= rs.question("terceiro numero")
var valores= [numero1, numero2, numero3]

console.log(valores.sort())


