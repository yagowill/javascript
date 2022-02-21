function contar() {
    let txt1 = document.getElementById('txt1')
    let txt2 = document.getElementById('txt2')
    let txt3 = document.getElementById('txt3')
    let res = document.getElementById('res')
    let ini = Number(txt1.value)
    let fim = Number(txt2.value)
    let passo = Number(txt3.value)
    if (txt1.value.length == 0 || txt2.value.length == 0 || txt3.value.length == 0) {
        res.innerText = 'Impossível contar, verifique os dados...'

    } else if (passo == 0 ) {
        alert('considerando passo = 1')
        passo++        
        res.innerHTML = "Contando...<br>"
        if (ini < fim) {
            for (var c = ini ; c < fim ; c += passo ) {
            res.innerText += `${c} \u{1F449}`
            } 
        } else {
            for (var c = ini ; c > fim ; c -= passo ) {
                res.innerText += `${c} \u{1F449}`
            } 
        } res.innerText += `\u{1F3C1} `
    } else {
        res.innerHTML = "Contando...<br>"
        if (ini < fim) {
            for (var c = ini ; c < fim ; c += passo ) {
            res.innerText += `${c} \u{1F449}`
            } 
        } else {
            for (var c = ini ; c > fim ; c -= passo ) {
                res.innerText += `${c} \u{1F449}`
            } 
        } res.innerText += `\u{1F3C1} `
    }
}