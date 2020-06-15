var rs = require("readline-sync")
var n1 = rs.questionInt("Digite um numero entre 1 e 100: ")
var n2 = rs.questionInt("Digite outro um numero entre 1 e 100: ")

while(n1 <= n2){   
     if(n1%5 == 0 && n1%7 == 0){
        console.log("PINGPONG")
     }
    if(n1%7 == 0){
    console.log("PING") 
   } 
   else if(n1%5 == 0){
       console.log("PONG")}

 
    
     
else{
        console.log(n1)
       }
    n1++

       }