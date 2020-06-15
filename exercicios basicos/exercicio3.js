var rs = require("readline-sync")
var numero = rs.question("insira a senha")
if(numero == 1234){console.log("senha correta, acesso liberado")}
else{console.log("senha incorreta. tente novamente")} 
