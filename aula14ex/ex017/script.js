function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.length !== 0) { 
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }



    } else {
        alert('Por favor, digite um número!')
    }
}