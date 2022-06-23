const enviar = document.getElementById("Enviar");
const tarefas = document.getElementById("tarefas");

enviar.addEventListener("click", () => {
    let pegaTexto = tarefas.value;

    container.insertAdjacentHTML('beforeend',
        '<div class="tarefas"><input type="checkbox">' + pegaTexto + '</div>');

    tarefas.value = ""
});