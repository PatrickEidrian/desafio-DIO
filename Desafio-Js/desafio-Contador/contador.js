const botaoMais = document.getElementById("mais")
const botaoMenos = document.getElementById("menos")
let contador = document.getElementById("currentNumber")
let currentNumber = 0



botaoMais.addEventListener("click", () => {
    currentNumber += 1
    contador.innerHTML = currentNumber
    if (currentNumber > 0) {
        contador.style.color = "green"
    } else
    if (currentNumber == 0) {
        contador.style.color = 'black'
    }
});

botaoMenos.addEventListener("click", () => {
    currentNumber -= 1
    contador.innerHTML = currentNumber
    if (currentNumber < 0) {
        contador.style.color = 'red'
    } else
    if (currentNumber == 0) {
        contador.style.color = 'black'
    }
});