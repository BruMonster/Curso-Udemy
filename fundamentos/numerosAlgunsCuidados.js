console.log(7 / 0)
//Todo núemero muito grande o JavaScript define como Infinito
console.log("10" / 2)
//JavaScript consegue mesmo estando entre aspas, ou seja, sendo uma string.
console.log("Show!" * 2)
//Diferente de algumas linguagensJavaScript não escreve a palavra "Show!" nesse caso duas vezes. Gera um Nothing a Number
console.log(0.1 + 0.7)
//Devido a configuração do JavaScript, em relação ao ponto flutuante, ele não dará o resultado. Relacionado com o tempo de execução. Sempre que quisermos temos que usar a função toFixed
console.log((0.1 + 0.7) .toFixed(1))
//Resultado apresentado em uma casa decimal
console.log((0.1 + 0.7) .toFixed(2))
//Resultado apresentado em duas casas decimais