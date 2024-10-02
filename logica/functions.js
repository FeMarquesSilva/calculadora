let novoValo = false
let resultadoFinal = 0
let mostrarResultado = false

function add(valor) {
    if (novoValo == false) {
        document.getElementById('resultado').textContent += valor
    } else {
        limpar()
        document.getElementById('resultado').textContent += valor
    }
}

function calcular(tpConta) {

    if (!tpConta) {
        tpContaFinal = document.getElementById('tpConta').textContent
        switch (tpContaFinal) {
            case 'Tipo de Conta: +':
                tpConta = '+'
                break
            case 'Tipo de Conta: -':
                tpConta = '-'
                break
            case 'Tipo de Conta: *':
                tpConta = '*'
                break
            case 'Tipo de Conta: /':
                tpConta = '/'
                break
        }
        mostrarResultado = true
    }

    if (tpConta == '+') {
        resultadoFinal += parseFloat(document.getElementById('resultado').textContent)
        document.getElementById('tpConta').textContent = 'Tipo de Conta: +'
    } else if (tpConta == '-') {
        if (resultadoFinal != 0) {
            resultadoFinal -= parseFloat(document.getElementById('resultado').textContent)
        } else {
            resultadoFinal = parseFloat(document.getElementById('resultado').textContent)
        }
        document.getElementById('tpConta').textContent = 'Tipo de Conta: -'
    } else if (tpConta == '/') {
        if (resultadoFinal != 0) {
            resultadoFinal /= parseFloat(document.getElementById('resultado').textContent)
        } else {
            resultadoFinal = parseFloat(document.getElementById('resultado').textContent)
        }
        document.getElementById('tpConta').textContent = 'Tipo de Conta: /'
    } else {
        if (resultadoFinal != 0) {
            resultadoFinal *= parseFloat(document.getElementById('resultado').textContent)
        } else {
            resultadoFinal = parseFloat(document.getElementById('resultado').textContent)
        }
        document.getElementById('tpConta').textContent = 'Tipo de Conta: *'
    }

    novoValo = true

    if(mostrarResultado){
        document.getElementById('resultado').textContent = resultadoFinal
        mostrarResultado = false
        resultadoFinal = 0
    }

}

function limpar() {
    document.getElementById('resultado').textContent = ''
    mostrarResultado = false
    novoValo = false
}