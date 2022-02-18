function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.lenth == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'imagens/crianca_m.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/jovem_m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'imagens/crianca_f.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/jovem_f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_f.png')
            }
            
        }
    } 
    img.style.alignItems = 'center'
    img.style.borderRadius = '50%'
    img.style.boxShadow = '1px 1px 10px  rgba(0, 0, 0, 0.26)'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
    res.appendChild(img)
}