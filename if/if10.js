//10.Faça um programa que receba três notas, calcule e mostre a média aritmética entre elas, 
//caso a média aritmética seja:Media maior ou igual a 7 imprimir:
// ALUNO APROVADOMedia menor que 7 imprimir : ALUNO REPROVADO



var rs = require("readline-sync")
var nota1= rs.questionInt("digite a primeira nota") 
var nota2= rs.questionInt("digite a segunda nota") 
var nota3= rs.questionInt("digite a terceira nota") 
var resultado=[(nota1 + nota2 + nota3) /3]
if(resultado >= 70){console.log("aluno aprovado, media é:", resultado)}
else{console.log("aluno reprovado, a media obrigatoria é 70 e a sua foi:" , resultado)}




