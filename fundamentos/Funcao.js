console.log(typeof Object) 

//funcao sem retorno

function imprimirSoma(a, b) {

    console.log(a + b)



}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma()

//FUNCAO COM RETORNO

function soma(a, b = 0) {

    return a+b

}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())

// Armazenando uma funcao em uma variavel

const impSoma = function (a, b) {

    console.log(a + b)

}

impSoma(5, 5)

// Armazenando funcão arrow em uma variavel

const soma = (a, b) => a + b

console.log(soma(2, 3))

//retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)

imprimir2('TESTE')


