//Rode o codigo para saber de qual casa você pertence em Harry potter

const axios = require("axios")
axios.get(`https://www.potterapi.com/v1/sortingHat/?key=$2a$10$iik64t6QHMWccbuYc5cfw.rV22Ht31tPnD23NukVjoXIStF8ViH2u`)
.then(function (resposta) {
    console.log(resposta.data)})