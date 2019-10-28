// Destructuring em reactJS

var [apple2, banana2, orange2, [tomato]] = [
    'apple',
    'banana',
    'orange',
    ['tomato']];

console.log(tomato);

// Destructuring com obj

var obj = {
    name:'rodrigo',
    props:{
        idade: 22
    }
};
var {name} = obj;
var {props:{idade}}= obj;
console.log(name,idade);