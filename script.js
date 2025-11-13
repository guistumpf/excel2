const inputnegativo = document.getElementById("negativo")
const inputpositivo = document.getElementById("positivo")
const result = document.getElementById("resultado")
const trava = document.querySelector("button")
const data = document.getElementById("data")
const desc = document.getElementById("desc")


function saldo() {
    const valordespesa = inputnegativo.value
    const valorreceita = inputpositivo.value

    const despesa = parseFloat(valordespesa) || 0
    const receita = parseFloat(valorreceita) || 0


    const saldofinal = receita - despesa
    result.innerText = "Saldo Final:" + saldofinal.toFixed(2)


}

inputnegativo.addEventListener('input', saldo);
inputpositivo.addEventListener('input', saldo);

function travar() {
    inputnegativo.disabled = !inputnegativo.disabled
    inputpositivo.disabled = !inputpositivo.disabled
data.disabled = !data.disabled
desc.disabled = !desc.disabled
}
