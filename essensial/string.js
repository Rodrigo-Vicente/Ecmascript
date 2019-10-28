/*
-string e suas funções
*/

// Retorna o tamanho de uma string
const textSize = 'texto'.length;
console.log("quantidade de de letras:",textSize);

// Busca um valor e substitui por outro
const replecedtext = 'texto'.replace('text','txet');
console.log("\nSubstituição de valor:",replecedtext);

// Retorna um array quebrando a string por um delimitador
const splittedtext = 'texto'.split('x');
console.log("\nArray com as posições separas pelo delimitador:", splittedtext);

// Retorna a "fatia" de um valor
const lastChar = 'texto'.slice(-1);
console.log('\nUltima letra de uma string:',lastChar);

const allwithoutLastChar='texto'.slice(0,-1);
console.log('\nValor da string da primeria letra menos a ultima:',allwithoutLastChar);

const secondtoEnd = 'texto'.slice(1);
console.log('\nValor da string da segunda letra até a ultima:', secondtoEnd);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'texto'.substr(0,2);
console.log('\n As duas letras primeiras são:',twoCharsBeforeFirstPos);