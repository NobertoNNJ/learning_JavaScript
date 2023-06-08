let num = [3,1,4,1]
num[4] = 5
num.push(9)
console.log(`o vetor é: ${num}`)
console.log(`o vetor tem: ${num.length} posições`)
num.sort()
console.log(`o vetor ordenado fica: ${num}`)

/*for (let i = 0; i < num.length; i++){
    console.log(`A posição ${i} possui o valor: ${num[i]}`)
}
*/
for(let i in num){
    console.log(`A posição ${i} possui o valor: ${num[i]}`)
}
console.log(`O valor esta na posição: ${num.indexOf(4)}`)
console.log(num.indexOf(15))