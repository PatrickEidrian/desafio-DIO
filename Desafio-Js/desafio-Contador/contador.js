let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

let botaoMenos = document.getElementsByName("subtrair");
let botaoMais = document.getElementsByName("adicionar");

botaoMenos.addEventListener("click", increment);
botaoMais.addEventListener("click", decrement);