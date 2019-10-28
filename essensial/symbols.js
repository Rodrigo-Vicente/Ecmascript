const symbol1 = Symbol();
const symbol2 = Symbol();

// symbol são únicos
console.log('symbol1 é igual a symbol2:', symbol2 === symbol2 );

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Rodrigo',
    [nameSymbol2]:  'Outro Nome',
    lastName: 'Vicente Bento da Silva', 
}
console.log(user);

// symbols criam propriedades que não são enumeradas

for(const key in user){

    if(user.hasOwnProperty(key)){
        console.log('\nValor da chave', key,':', user[key]);
    }
}
console.log('\n Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedade do objeto user:', Object.values(user));

// Exibir Symbos de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Criar um enum
const directions = {
    UP : Symbol('UP'),
    DOWN    : Symbol('DOWN'),
    LEFT    : Symbol('LEFT'),
    REIGHT  : Symbol('REIGHT')
};

