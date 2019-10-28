const str = 'Oi eu sou o goku';

function logArgs(...args){
    console.log(args);
}

logArgs(...str);
/*
const arr = [1,2,3,4];

logArgs(...arr);


const arr2 = [...arr,5,6,7];
console.log(arr2);
*/

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2:'hello'
};

console.log(obj2);