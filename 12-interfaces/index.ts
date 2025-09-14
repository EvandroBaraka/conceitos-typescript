interface ICustomer {
  name: string;
  age: number;
}

interface IAddress {
   street: string;
}

// o perfil do cliente é um conjunto de informações que eu quero criar que é a junção do Customer, name e age e do Address que é a rua 
interface ICustomerProfile extends ICustomer, IAddress {}

const newProfile: ICustomerProfile = {
   name: "Evandro",
   age: 34,
   street: "Rua xyz"
}


// o mesmo exemplo acima criado com type ao invés de interface
type TCustomer = {
   name: string;
   age: number;
}

type TAddress = {
   street: string;
}

type TProfile = TCustomer & TAddress

const newProfile2: TProfile = {
   name: "Ricardo",
   age: 35,
   street: "Rua xyz"
}