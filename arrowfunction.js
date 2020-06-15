var fs = require("fs");
var json = fs.readFileSync("\cars.json");
var rs = require("readline-sync");
var potenciaminima = rs.questionInt("Digite uma potencia minima: ");
var carros = JSON.parse(json);

var carrocompotenciaminima = carros.filter((carro) => {
    return carro.Horsepower > potenciaminima;
    })

console.log(carrocompotenciaminima.length)