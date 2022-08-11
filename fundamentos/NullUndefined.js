let valor  
console.log(valor)

valor = null
console.log(valor)
//comnsole.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar essa atribuição
console.log(!!produto.preco)
// delete produto preco

console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)