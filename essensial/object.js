// Object

let user ={
    name: 'Rodrigo'
};

// Aleterando a propriedade de um objeto

user.name = 'Outro nome 1';


user['name'] = 'Outro nome 2';


const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

// Criando uma propriedade

user.lastName = "Rodrigo Vicente";
console.log(user);

// Deletando uma propriedade
delete user.name;
console.log(user);