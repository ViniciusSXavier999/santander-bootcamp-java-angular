// tipos primitivos 

// BOOLEAN -> Retorna true ou false

/*O método typeof retorna o tipo da váriavel.*/ 
var vOuF = false
console.log(typeof(vOuF))

// NUMBER  -> QUALQUER TIPO DE NÚMERO
var numeroQualquer = 12
console.log(typeof(numeroQualquer))

// STRING -> CONJUNTO DE CARACTER
var nome = "Vinicius"
console.log(typeof(nome))

// FUNÇÃO -> UM PEDAÇO DE CÓDIGO QUE REPRESENTA UMA LÓGICA NO PROGRAMA
var funcao = function() {}
console.log(typeof(funcao))

/* ------------------------------------------------------------------------------- */

// variavel var
var variavel = "Vinicius"

// variavel do tipo let 
let variavel2 = "teste"

// variavel que não pode ser alterada
const variavel3 = "Timão"

console.log(variavel)

function escopoLocal() {
    let escopoLocalInterno = 'Local'
    console.log(escopoLocalInterno)
}

escopoLocal()

// ----------------------------------------- //

/* DIFERENÇAS ENTRE ATRIBUIÇÃO, COMPARAÇÃO E COMPARAÇÃO IDÊNTICA */

// atribuição 
var atribuicao = "Kobe bryant"

// comparação
var comparacao = '0' == 0
console.log(comparacao)

// comparação identica
var comparacaoIdentica = '0' === 0
// vai retornar false pq os tipos são diferentes
console.log(comparacaoIdentica)

// ----------------------------------------------------------------- //

/* OPERADORES ARITMÉTICOS, RELACIONAIS E LÓGICOS */

// OPERADORES ARITMÉTICOS

// adicao
var adicao = 1 + 1
console.log(adicao)

// subtração
var subtracao = 1 - 1 
console.log(subtracao)

// multiplicalção
var multiplicacao = 2 * 2
console.log(multiplicacao)

// divisão real
var divisao = 5 / 2 
console.log(divisao)

// divisão inteira 
var divisaoInteira = 6  % 2
console.log(divisaoInteira)

// potenciação
var potenciacao = 2 ** 10
console.log(potenciacao)

// OPERADORES RELACIONAIS 

// maior 
var maiorQue = 5 > 2
console.log(maiorQue)

// menor
var menorQue = 4 < 2
console.log(menorQue)

// maior ou igual a
var maiorOuIgual = 5 >= 5
console.log(maiorOuIgual)

// menor ou igual a 
var menorOuIgual = 10 <= 9
console.log(menorOuIgual)

// OPERADORES LÓGICOS

// &&
var e = true && true
console.log(e)

// ||
var ou = false || true 
console.log(ou)

// !
var nao = !true 
console.log(nao)



