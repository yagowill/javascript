var idade = 17
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18 || idade > 65) {
    console.log(`Você tem ${idade} anos`)
    console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
}