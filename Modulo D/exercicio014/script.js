function carregar() {
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#imagem")
    var data = new Date()
   var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        imagem.src = 'FotoManha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora< 18) {
        imagem.src = 'FotoTarde.jpg'
        document.body.style.background = 'orange'
    } else {
        imagem.src = 'FotoNoite.jpg'
        document.body.style.background = '#3030DD'
    }
}