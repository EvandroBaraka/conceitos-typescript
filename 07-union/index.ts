// Com o operador Union " | " podemos unir mais de um tipo em uma variável
function showClientId(id: number | string ) {
    console.log(`O ID do cliente é: ${id}`)
}

showClientId(10)
showClientId('fashfiash10')
showClientId('abcodeo')