const dev = "Guilherme Cruz"

console.log(dev.charAt(4))
console.log(dev.charAt(14)) //Stress (retornou vazio)
console.log(dev.charCodeAt(3)) //retorna o valor unicode.
console.log(dev.indexOf('i'))
console.log(dev.indexOf(' '))
console.log(dev.substring(0, 9))
console.log(dev.substring(10))
console.log(dev.concat(', desenvolvedor em desenvolvimento '.concat('xD')))
console.log(dev.replace(5, '3'))

console.log('a,b,c'.split(','))