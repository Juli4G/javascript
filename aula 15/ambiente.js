let num = [5, 8, 2, 9, 3]
num.sort()
console.log(num)
console.log(`o nosso vetor tem ${num.length} elementos`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}

