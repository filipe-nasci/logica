//saiba mais sobre os personagens de harry potter

var rs = require("readline-sync")
var name= rs.question("digite o PRIMEIRO nome do personagem: ")
var surname= rs.question("digite o SOBRENOME do personagem: ")
name = name.substring(0,1).toUpperCase().concat(name.substring(1));
surname = surname.substring(0,1).toUpperCase().concat(surname.substring(1));
const axios = require("axios")
axios.get(`https://www.potterapi.com/v1/characters?key=$2a$10$iik64t6QHMWccbuYc5cfw.rV22Ht31tPnD23NukVjoXIStF8ViH2u&name=${name}+${surname}`)
.then(function (resposta) {
 console.log(resposta.data)})