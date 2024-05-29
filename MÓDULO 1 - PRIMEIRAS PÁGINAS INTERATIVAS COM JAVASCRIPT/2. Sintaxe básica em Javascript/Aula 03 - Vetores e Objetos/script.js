// O QUE SÃO VETORES OU ARRAYS

// Como declarar um array
let array = ['string', 8, true]
console.log(array)

// o array pode guardar vários tipos de dados, inclusive outros arrays dentro dele
let array2 = ['string', 1, 2, true, ['array1'], ['array2'], ['array3'], 10, 999]
console.log(array2)

// pegando um dado especifico do array2
console.log(array2[0]) // vai imprimir "string" no console

/* Manipulando arrays */

// FOREACH -> percorre um array
array.forEach(function(item, indice){console.log(item, indice)})

// MÉTODO PUSH -> Adiciona um novo item no final do array
array.push('Novo item')
console.log(array)

// MÉTODO POP -> REMOVE UM ITEM NO FINAL DO ARRAY
array.pop()
console.log(array)

// MÉTODO SHIFT -> TIRA UM ITEM DO INICIO DE UM ARRAY 
array.shift();
console.log(array)

// MÉTODO UNSHIFT -> ADICIONA UM ITEM NO INICIO DO ARRAY
array.unshift('Kobe')
console.log(array)

// MÉTODO INDEXOF -> RETORNA O INDICE DE UM ITEM DENTRO DO ARRAY
console.log(array.indexOf('Kobe'))

// MÉTODO SPLICE -> remove ou substitui um item pelo índice;
array.splice(0, 2)
console.log(array)

// MÉTODO SLICE -> RETORNA UMA PARTE DE UM ARRAY JÁ EXISTENTE
let novoArray = array.slice(0, 3)
console.log(novoArray)

// EXEMPLO COM OBJETOS

let object = {string: 'string', numero: 999, boolean: true, array: ["array"],
 objectInterno: {objectInterno: 'objeto interno'}}

 console.log(object)

 // acessando objeto especifico
 console.log(object.numero)

 // passando o valor de uma propriedade do meu objeto para uma outra propriedade
 var string = object.numero
 console.log(string)

 var lista  = object.array
 console.log(lista)

 // pegando as propriedades do meu objeto

 var {string, boolean} = object
 console.log(string, boolean)

