function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var anoNasc = fano.value
    var res = document.querySelector('div#res')
    if (anoNasc < 1920 || anoNasc > ano) {
        res.innerHTML = "Verifique seus dados"
        alert("Verifique seus dados")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - anoNasc
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'masculino'
            if (idade >=0 && idade <= 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
                gênero = 'uma criança'
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemhomem.png')
                gênero = 'um jovem'
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-m.png')
                gênero = 'adulto'
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
                gênero = 'idoso'
            }
        } if (fsex[1].checked) {
            gênero = 'feminino'
            if (idade >= 0 && idade <= 10) {
                gênero = 'uma criança'
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                gênero = 'uma jovem'
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 60) {
                gênero = 'adulta'
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                gênero = 'idosa'
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos`
        res.appendChild(img)
    }

}
