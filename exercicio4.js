var rs = require("readline-sync")
var numero = rs.question("insira a quantidade de macas")
if(numero <12){console.log ("pague", numero *0.300)}
else{console.log ("pague", numero *0.250)}

