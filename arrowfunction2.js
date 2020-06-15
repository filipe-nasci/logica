var fs = require("fs");
var json = fs.readFileSync("\cars.json");
var carros = JSON.parse(json);

var carrosdojapao= carros.filter((carro) => {
    return carro.Origin == "Japan";
    })

console.log(carrosdojapao)