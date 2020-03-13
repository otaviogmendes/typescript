// //Inicio da definição da classe
// class Cumprimento {
//     //Atributos nome do atributo: tipo
//     nome: string;
//     idade:number
//     //metodo construtor
//     // nos parenteses os parametros
//     constructor(_nome: string="", _idade:number=0) {
//         this.nome = _nome;
//         this.idade = _idade;
//     }
//     // outro metodo
//     mostrarNomeIdade() {
//         console.log(`A pessoa ${this.nome} tem ${this.idade} anos.`)
//     }
// }
// // Fim dafinição da classe
// // invocando a função e o resultado vou armazenar na variavel chamada resposta
// let pessoa1 = new Cumprimento("Otavio",25);
// pessoa1.mostrarNomeIdade() // utilizar un metodo do objeto resposta
var carro = /** @class */ (function () {
    function carro(_marca, _ano, _velicidadeAtual, _velocidadeMaxima) {
        this.marca = _marca;
        this.ano = _ano;
        this.velocidadeAtual = _velicidadeAtual;
        this.velocidadeMaxima = _velocidadeMaxima;
    }
    carro.prototype.exibir = function () {
        console.log("A marca \u00E9 " + this.marca + " , o ano \u00E9: " + this.ano + " e as velocidades s\u00E3o: Atual: " + this.velocidadeAtual + " Maxima: " + this.velocidadeMaxima);
    };
    carro.prototype.acelerar = function (n) {
        for (var i = 0; i < n; i++) {
            if (this.velocidadeAtual < this.velocidadeMaxima) {
                this.velocidadeAtual++;
                console.log("Velocidade atual: " + this.velocidadeAtual);
            }
            else {
                console.log("Não da pra acelerar");
            }
        }
    };
    carro.prototype.desacelerar = function (n) {
        for (var i = 0; i < n; i++) {
            if (this.velocidadeAtual == 0) {
                console.log("O carro já esta parado");
            }
            else {
                this.velocidadeAtual--;
                console.log("A velocidade é : " + this.velocidadeAtual);
            }
        }
    };
    return carro;
}());
var carro1 = new carro("Fox", 1994, 0, 100);
carro1.acelerar(50);
carro1.desacelerar(15);
