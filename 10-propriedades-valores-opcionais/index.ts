type Customer = {
    firstName: string,
    lastName?: string,
    age: number
}

const newCustomer: Customer = {
    firstName: 'João',
    age: 48
}

console.log(newCustomer);


function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome do usuário é ${firstName}`);
    lastName && console.log(`O último nome do usuário é ${lastName}`)
}

printName('Evandro');