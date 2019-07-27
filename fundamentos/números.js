const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //O método .isInteger determina que o valor passado é inteiro
console.log(Number.isInteger(peso2)) //Diferença entre Number e number = Number é uma função/ number = Tipo de dado

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //O método .toFixed arredonda o número.
console.log(media.toString(2)) //em binário
console.log(typeof media)