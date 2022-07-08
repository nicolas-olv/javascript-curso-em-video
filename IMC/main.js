let botaoCalcular = document.querySelector("#botaoCalcular")
botaoCalcular.addEventListener('click', calcularIMC)

function calcularIMC() {
    let campoAltura = document.querySelector("#campoAltura")
    let campoPeso = document.getElementById("campoPeso")
    let campoResultado = document.querySelector("#campoResultado")
    let campoClassificacao = document.querySelector("#campoClassificacao")
    let altura = parseFloat(campoAltura.value)
    let peso = Number(campoPeso.value)
    let imc = peso / altura ** 2
    campoResultado.innerHTML = `${"imc".toUpperCase()} = ${imc.toFixed(2)}`
    if (imc < 18.5) {
        campoClassificacao.innerHTML = `Classificação: Abaixo do Peso`
    } else if (imc >= 18.5 && imc < 25) {
        campoClassificacao.innerHTML = `Classificação: Peso Normal`
    } else if (imc >= 25 && imc < 30) {
        campoClassificacao.innerHTML = `Classificação: Sobrepeso`
    } else if (imc >= 30 && imc < 35) {
        campoClassificacao.innerHTML = `Classificação: Obesidade Grau I`
    } else if (imc >= 35 && imc < 40) {
        campoClassificacao.innerHTML = `Classificação: Obesidade Grau II`
    } else {
        campoClassificacao.innerHTML = `Classificação: Obesidade Grau III`
    }
}