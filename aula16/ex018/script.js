let num = document.getElementById('num')
let list = document.getElementById('list')
let numeros = []
let res = document.getElementById('res')
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, numeros)) {
        let item = document.createElement('option')
        numeros.push(Number(num.value))
        item.text = `O valor ${num.value} foi adicionado`
        list.appendChild(item)
        num.value = ''
        num.focus()
        res.innerHTML= ''

    } else {
        alert('Valor inválido ou já está na lista.')
        num.value = ''
        num.focus()
    }
}
function finalizar() {
    if (numeros.lenth == 0) {
        alert('Adicione  valores antes de finalizar')
    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media  = 0
        for (let c in numeros) {
            soma += numeros[c]
            if(numeros[c] > maior) 
                maior = numeros[c]
            if (numeros[c] < menor) 
                menor = numeros[c]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}