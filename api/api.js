const axios = require("axios")
var rs = require("readline-sync")
var yesno = rs.question("digite yes ou No: ")

axios.get("https://yesno.wtf/api")
.then(function (resposta) {
    console.log(resposta.data.answer)
    if(yesno == resposta.data.answer)
    {console.log("Acertou!!! você é o bichão memo hein?")}
    else{console.log("que pena, você errou!")}
})
.catch(function (erro){
    console.log(erro.data)})