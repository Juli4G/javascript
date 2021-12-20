function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'manhajs.png'
        document.body.style.background = '#F4A460'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tardejs.png'
        document.body.style.background = '#CD5C5C'
    } else {
        img.src = 'noitejs.png'
        document.body.style.background = '#545AA9'
    }
}


