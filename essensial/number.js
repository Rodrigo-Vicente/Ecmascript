/*
-number e suas funções
*/

const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', typeof numberAsString);

// Retora número com um número de casas decimais
const fixedTwodecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwodecimals);

// Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));

// Transforma uma string em int
console.log('\nString parseada para int:', parseInt('13.20'));