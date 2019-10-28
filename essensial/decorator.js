let loggedIn = false;


function callfauthenticated(fn){
    return !!loggedIn && fn();
}
function soma(a,b){
    return a+b;
}
console.log(callfauthenticated(()=> soma(2,3)));
loggedIn = true;
console.log(callfauthenticated(()=> soma(2,7)));
loggedIn = false;
console.log(callfauthenticated(()=> soma(2,10)));
loggedIn= true;