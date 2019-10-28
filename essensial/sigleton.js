function pessoa(){
    if(!pessoa.instance){
        pessoa.instance = this;
    }
    return pessoa.instance;
}
const p = pessoa.call({nome:'Rodrigo'});
const p2 = pessoa.call({nome:"Custon-Name"});

console.log(p);
console.log(p2);