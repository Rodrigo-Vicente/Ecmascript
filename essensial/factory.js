function Pessoa(customProperties){
    return{
        nome:'Rodrigo',
        sobrenome:'Vicente',
        ...customProperties
    }
}

const p = Pessoa({idade:22});
console.log(p);