var rs = require("readline-sync")
var nome = rs.question("ensira um numero?")
var tamanhonome = nome.length
for(i = 0 ; i < tamanhonome ; i++) 
if(nome.charAt(i)=="a") {console.log(nome.charAt(i).toUpperCase())}
else{console.log(nome.charAt(i))}

