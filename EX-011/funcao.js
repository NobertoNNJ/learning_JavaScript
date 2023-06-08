/*function parimp(n){
    if (n%2 == 0){
        return 'par'
    }
    else{
        return 'impar'
    }
}
let c = parimp(8)
console.log(c)
console.log(parimp(11))

function soma(n1 = 0,n2 = 0){
    return n1+n2
}
console.log(soma(7))

var v = function (x){
    return x*2
}

console.log(v(5))
*/

function fatorial(t){
    if (t > 1){
        return t * fatorial(t-1)
    }
    else{
        return 1
    }
}

console.log(fatorial(4))