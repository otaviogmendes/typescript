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

class carro {
    marca: string
    ano: number
    velocidadeAtual: number
    velocidadeMaxima: number

    constructor(_marca: string, _ano: number, _velicidadeAtual: number, _velocidadeMaxima: number) {
        this.marca = _marca
        this.ano = _ano
        this.velocidadeAtual = _velicidadeAtual
        this.velocidadeMaxima = _velocidadeMaxima
    }

    exibir() {
        console.log(`A marca é ${this.marca} , o ano é: ${this.ano} e as velocidades são: Atual: ${this.velocidadeAtual} Maxima: ${this.velocidadeMaxima}`)

    }

    acelerar(n:number) {
        for (var i = 0; i < n; i++) {
            if (this.velocidadeAtual < this.velocidadeMaxima) {
                this.velocidadeAtual++
                console.log("Velocidade atual: " + this.velocidadeAtual)
            }
            else {
                console.log("Não da pra acelerar")
            }
        }
    }
    desacelerar(n:number) {
        for (var i = 0; i < n; i++) {
        if (this.velocidadeAtual == 0) {
            console.log("O carro já esta parado")
        }
        else {
            this.velocidadeAtual--
            console.log("A velocidade é : " + this.velocidadeAtual)
        }
    }
    }

}

let carro1 = new carro("Fox", 1994, 0, 100)
carro1.acelerar(50)
carro1.desacelerar(15)


