const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-botao");
const listaDeCompras = document.getElementById("lista-de-compras");
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

    const checkBoxCustomizado = document.createElement("div");
    checkBoxCustomizado.classList.add("checkbox-customizado");

    label.appendChild(checkbox);
    label.appendChild(checkBoxCustomizado);

    containerCheckbox.appendChild(label);



    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");

    const nomeDoItem = document.createElement("p");
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

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);


    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
});