var rs = require("readline-sync")
var idade = rs.question("qual a sua idade?")
if(idade >=65){console.log("você pode votar mas não é obrigado")} 
else if(idade >=18) {console.log("você é obrigado a votar")}
else if(idade >=16){console.log("pode votar mas não é obrigatório")}
else{console.log("você não pode votar")}

