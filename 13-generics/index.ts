// Função genérica que aceita um argumento do tipo T 
// e retorna um array de valores do mesmo tipo T
function makeArray<T>(item: T): T[] {
   return [item];
}


// Uso da função com tipo number
let numbers = makeArray(10);
console.log(numbers); // Output: [10]


// Uso da função com tipo string
let names = makeArray('Evandro')
console.log(names)


function comprimento<T extends { length: number }>(item: T): number {
  return item.length;
}

const tamanho = comprimento("texto"); // ok
const tamanhoArray = comprimento([1, 2, 3]); // ok

console.log(tamanho)
console.log(tamanhoArray)