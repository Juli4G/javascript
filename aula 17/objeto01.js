let amigo = {nome: 'julia', 
sexo: 'F',
peso: 54.4,
emagrecer(p=0) {
    console.log('emagreceu')
    this.peso -= p
}}

amigo.emagrecer(0.4)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)