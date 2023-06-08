function contar(){
    var ini = window.document.getElementById("txti")
    var fim = window.document.getElementById("txtf")
    var pas = window.document.getElementById("txtp")
    var res = window.document.getElementById("conta")

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] faltam dados!')
        res.innerHTML ="Impossivel contar"
    }
    else{
        res.innerHTML = "contando:"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0){
            window.alert("Passo invalido! consideraremos o passo 1")
            p = 1
        }

        if(i < f){
            // crescente
            for(var c = i; c <= f; c += p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else{
            // decrescente
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
