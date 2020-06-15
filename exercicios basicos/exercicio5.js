var rs = require("readline-sync")
var sexo = rs.question("qual o seu sexo?")
var altura = rs.question("qual a sua altura?")
var peso = rs.question("qual o seu peso?")
if(sexo == "masculino"){console.log("seu peso ideal é", (72.7 *altura) -58)}
else if(sexo== "feminino"){console.log("seu peso ideal é", (62.1 *altura)-44.7)}
if(sexo =="masculino" && peso > (72.7 *altura) -58) {console.log("você está acima do peso")}
else if(sexo =="masculino" && peso < (72.7 *altura) -58) {console.log("você está em seu peso ideal")}
if(sexo == "feminino" && peso >(62.1 *altura)-44.7) {console.log("você está acima do peso")}
else if(sexo == "feminino" && peso < (62.1 *altura)-44.7){console.log("você está em seu peso ideal")}
