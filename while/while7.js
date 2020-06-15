var rs = require("readline-sync")
var letra = rs.question("escolha a ou b: ")
while(letra != "a"){
    if(letra == "b"){
        var num1 = rs.questionInt("escolha um numero: ")
        var num2 = rs.questionInt("escolha o segundo numero: ")
        console.log("a soma é:" , (num1 + num2) , "!" , "deseja fazer outra soma?")
        letra = rs.question("escolha a ou b: ")
    } else { letra = rs.question ("nao entendi. escolha a ou b: ")}
}  console.log("programa encerrado")   