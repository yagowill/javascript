let txt = document.getElementById('n')
let selnum = document.getElementById('numeros')
n = Number(txt.value)
let numeros = []
function adicionar() {
            let item = document.createElement('option')
            numeros.push(n)
            item.text = `valor ${n} adicionado`
            selnum.appendChild(item)
}
function finalizar() {

}