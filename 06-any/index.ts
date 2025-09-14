// EXEMPLO SEM USO DO ANY
// function soma(numero1: number, numero2: number) {
//     return numero1 + numero2
// }

// console.log(soma(10, 20))

// console.log(soma('10', 20))


// EXEMPLO COM USO DO ANY
function soma(numero1: any, numero2: any) {
    return numero1 + numero2
}

console.log(soma(10, 20))

console.log(soma('10', 20)) // A função passa a aceitar uma string 
                            // onde deveria ser um number.