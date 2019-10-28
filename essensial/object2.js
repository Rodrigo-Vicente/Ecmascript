const user = {
    name: 'Rodrigo',
    lastName: 'Vicente Bendo da Silva'
}

// Recupera as chaves do objeto
console.log('Propriedade do objeto use: ', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\n Valores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Rodrigo Vicente Bendo da Silva'});

console.log('\nAdiciona a propriedade fullName no objeto', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({},user,{idade:22}));

// Previne todas as alterações em um objeto

const newObj = {foo:'bar'};
Object.freeze(newObj);
