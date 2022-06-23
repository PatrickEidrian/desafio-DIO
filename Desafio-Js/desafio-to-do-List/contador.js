const enviar = document.getElementById("Enviar");
const tarefas = document.getElementById("tarefas");

enviar.addEventListener("click", () => {
    let pegaTexto = tarefas.value;

    if (pegaTexto == "") {
        alert("Tarefa em Branco");
    } else {

        container.insertAdjacentHTML('beforeend',
            '<div class="tarefas" id="tarefaAdc"><input class="check" type="checkbox">' + pegaTexto + '<input type="submit" value="excluir" class="excluir" id="excluir"></div>');

        tarefas.value = ""
    }

    const excluir = document.getElementById("excluir");
    const removerTarefa = document.getElementById("tarefaAdc");

    excluir.addEventListener("click", () => {
        container.removeChild(removerTarefa)
    });
});