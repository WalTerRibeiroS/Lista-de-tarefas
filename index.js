const adicionarTarefa = document.getElementById("AdicionarTarefa");
const barraDeTarefas = document.querySelector(".card-checkbox")

adicionarTarefa.addEventListener("keydown", (evento) => {

    if(evento.key === "Enter"){
        gerarTarefa()
    }

})

adicionarTarefa.addEventListener("keyup", (evento) => {

    if(evento.key === "Enter"){
        adicionarTarefa.value = ""
    }

})

function gerarTarefa(){

    const tarefa = adicionarTarefa.value

    const tarefaContainer = document.createElement("div")

    const checkbox = document.createElement("input")
                     checkbox.setAttribute('type', 'checkbox');

    const textoToDo = document.createElement("label");

    const botao = document.createElement("button");
                  botao.setAttribute('type', 'button');


    textoToDo.textContent = tarefa;
    botao.textContent = "x"

    tarefaContainer.classList.add("container-checkbox");
    checkbox.classList.add("checkbox");
    textoToDo.classList.add("textoToDo");

    tarefaContainer.appendChild(checkbox);
    tarefaContainer.appendChild(textoToDo);
    tarefaContainer.appendChild(botao);
    
    barraDeTarefas.appendChild(tarefaContainer);

    botao.addEventListener("click", () => {

        checkbox.remove();
        textoToDo.remove();
        botao.remove();
        tarefaContainer.classList.remove("container-checkbox");
        
    })

}

