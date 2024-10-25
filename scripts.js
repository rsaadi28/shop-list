const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-botao");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

let contador = 0;

botaoSalvarItem.addEventListener("click", (event) => {
    event.preventDefault();

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox-input");
    checkbox.id = "checkbox-" + contador++;

    const label = document.createElement("label");
    label.setAttribute("for", checkbox.id);

    label.addEventListener("click", (event) => {
        const checkboxInput = event.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = event.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = event.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    });

    const checkBoxCustomizado = document.createElement("div");
    checkBoxCustomizado.classList.add("checkbox-customizado");

    label.appendChild(checkbox);
    label.appendChild(checkBoxCustomizado);

    containerCheckbox.appendChild(label);



    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item.value;

    containerNomeDoItem.appendChild(containerCheckbox);
    containerNomeDoItem.appendChild(nomeDoItem);


    const containerBotoes = document.createElement("div");

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    const imgRemover = document.createElement("img");
    imgRemover.src = "img/delete.svg";
    imgRemover.alt = "Remover";
    botaoRemover.appendChild(imgRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");
    const imgEditar = document.createElement("img");
    imgEditar.src = "img/edit.svg";
    imgEditar.alt = "Editar";
    botaoEditar.appendChild(imgEditar);

    botaoRemover.addEventListener("click", () => {
        try {
            listaDeCompras.removeChild(itemDaLista);
        } catch (error) {
            listaComprados.removeChild(itemDaLista);
        }
    });

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
    item.value = "";
});