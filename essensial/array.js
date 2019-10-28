const users = ['Rodrigo', 'Flavia','Leticia'];

const genero = {
    M: Symbol('M'),
    F: Symbol('F')
}
const pessoas =[
    {
        nome: 'Rodrigo',
        idade:  '22',
        genero: genero.M
    },
    {
        nome: 'Flavia',
        idade:  '18',
        genero: genero.F 
    },
    {
        nome: 'Leticia',
        idade:  '30',
        genero: genero.F 
    },
];

// Retorna a quantidade de itens de um array
console.log('Items',pessoas.length);

// Verificar se é Array
console.log('A variavel persons é um array:', Array.isArray(pessoas));

// iterar os itens do array
pessoas.forEach(pessoas =>{
    console.log('nome:'+pessoas.nome);
});

// Filtrar array
const girls = pessoas.filter(pessoas => pessoas.genero === genero.F);
console.log('\nNova lista com apenas Mulheres', girls);

// Retornar um novo

const personsWithCourse = pessoas.map(pessoas =>{
    pessoas.curso = 'Introdução ao Javascript';
    return pessoas;
});
console.log('\n Pessoas com a adição da propriedade curso:', personsWithCourse);

// Transformar um array em outro tipo

const totalIdade = pessoas.reduce((idade, pessoas)=>{
    idade +=pessoas.idade;
    return idade;
},0);

console.log('\nSoma de idade das pessoas', totalIdade);