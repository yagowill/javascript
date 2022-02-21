function contar() {
var txt1 = document.getElementById('txt1')
var txt2 = document.getElementById('txt2')
var txt3 = document.getElementById('txt3')
var inicio = Number(txt1.value)
var fim = Number(txt2.value)
var passo = Number(txt3.value)
var res = document.getElementById('res')
if (fim == 0 ){
    res.innerText = 'Impossível contar!'
} else if (passo == 0) {
    alert('Passo inválido, considerando passo 1')
    passo = 1
    res.innerHTML = 'Contando:'
    document.createElement('p').setAttribute('id', 'contagem')
    var contagem = document.getElementById('contagem')
    for (var c = inicio ; c <= fim ; c += passo) {
        res.innerText += `👉${c} `    
    }
} else {
    res.innerHTML = '<p>Contando:</p>'
    document.createElement('p').setAttribute('id', 'contagem')
    var contagem = document.getElementById('contagem')
    for (var c = inicio ; c <= fim ; c += passo) {
        res.innerText += `👉${c} `    
    }

}
}