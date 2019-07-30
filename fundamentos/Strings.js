/*Podemos delimitar uma string por aspas duplas,
aspas simples e também com o símbolo da crase*/
const escola = "Cod3r"

console.log(escola.charAt(4))
/*Significa que vai mudar a letra que está na posição 4, ou seja, a letra "R".
 Visto que temos que considerar o índice 0, que seria a letra "C", na palavra Cod3r*/

 console.log(escola.charAt(5))
 /*No caso de quando colocarmos um valor além e não houver uma letra para retornar
 o JavaScript retorna um valor vazio*/

 console.log(escola.charCodeAt(3))
 /*Essa função retorna o valor item selecionado com o seu valor na Tabela ASCII.
 No caso, o valo do índice indicado é o número 3, da palavra Cod3r, e seu valor na
 tabela ASCII é 51*/

 console.log(escola.indexOf('d'))
 /*Nessa função, ele nos retorna o índice qual o valor se refere.
 No caso, a letra 'd' seria o índice 2 dentro da palavra Cod3r*/

 console.log(escola.substring(1))
 /*Esse método nos retorna tudo o que vier depois do índice indicado.
 No caso, todos os índices da letra 'o' em diante, que é o índice 1 da palavra 'Cod3r'*/

 console.log(escola.substring(0, 3))
 /*Nesse caso, determinamos que vá do índice 0, que se refere à letra 'C', até o índice 3 em incluí-lo.
 No caso, da letra 'C' até 'd'*/

 console.log('Escola '.concat(escola).concat("!"))
 /*Essa função vai concatenar a expressão em aspas simples, com o valor que foi determinado em aspas dupla.
 O valor entre aspas duplas, vai ser adicinado ao fim do valor que já estava entre aspas duplas*/

 console.log(escola.replace(3, 'e'))
 /*Essa função irá substituir os valores que serão determinado entre os parenteses.
 Nesse caso, o valor '3' dentro da palavra "Cod3r", resultando então em "Coder"*/

 console.log('Bruno,Giulia,Bernardo'.split(','))
 /*Essa função irá determinar qual será a separação utilizada entre as palavras.
 Vai gerar uma array, separada por vírgula. Que foi a separação determinada em split*/