function carregar(){
    var msg =window.document.getElementById("msg")
    var img =window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = "Agora veja o meme"
    if (hora > 0 && hora <12){
        img.src = "js-meme.jpg"
    } 
    else if( hora >= 12 && hora < 18){
        img.src = "feio.jpg"
    }
    else{
        img.src = "kazuma.jpg"
    }
}
