

// Escreva um programa para ler o número de lados de um polígono regular e a medida do
//lado (em cm). Calcular e imprimir o seguinte:
//− Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
//− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
//− Se o número de lados for igual a 5 escrever PENTÁGONO.

var rs = require("readline-sync")
var lados = rs.question("quantos lados tem o seu polígono")

if( lados == 3) {console.log("é um triângulo"); var medida = rs.question("qual a medida dos lados")}
else if( lados == 4) {console.log("é um quadrado"); var medida = rs.question("qual a medida dos lados")}
else if( lados == 5) {console.log("é um pentágono"); var medida = rs.question("qual a medida dos lados")}
else {console.log("não é um polígono")}
if(lados == 3){console.log("a área total é" , lados * medida)}
if(lados == 4){console.log("a área total é" , lados * medida)}
if(lados == 5){console.log("a área total é" , lados * medida)}

