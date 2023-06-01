let tarefa = document.getElementById("input-task");
const botao = document.getElementById("addtask");
lengthString = tarefa.value;
function verificaoInputVazio() {
  // Função que verifica se o valor do Input é vázio
  lengthString = tarefa.value;
  if (lengthString.length == 0) {
    // Se for vázio ele não permite que o valor seja enviado, ou seja, aciona a função da linha '27'.
    let tarefa = document.getElementById("input-task");
    tarefa.classList.add("placeholder");
    tarefa = document.getElementById("input-task").placeholder = "Campo vázio, adicione uma tarefa...";
  }
  setTimeout(() => {
    if (lengthString.length == 0) {
      // Remove a classeList no If na linha '6'.
      tarefa.classList.remove("placeholder");
    }
  }, 800);
}

function aparacerPleaceOriginal() {
  // Função que retorna o placeHolder original de inicio.
  if (lengthString.length > 0) {
    document.getElementById("input-task").placeholder = "O que pretende fazer?";
  }
}

function mudarCor__adicionaTarefa() {
  // Função que muda a cor do botão 'adicionar tarefa'.
  lengthString = tarefa.value;
  const botao = document.getElementById("addtask");
  if (lengthString.length > 0) {
    // Se o valor for maior que 0, o background muda e a cor do texto também.
    botao.style.backgroundColor = "rgb(105, 176, 15)";
    botao.style.color = "white";
  } else {
    // Senão as cores retornam as originais setadas em style.css.
    botao.style.backgroundColor = "";
    botao.style.color = "";
  }
}

tarefa.addEventListener("input", () => {
  // Chama a função da linha '20' e linha '27', a cada valor atribuido dentro do input.
  aparacerPleaceOriginal();
  mudarCor__adicionaTarefa();
});

botao.addEventListener("click", () => {
  // Chama a função da linha '4' e linha '50'.
  verificaoInputVazio();
  criarElementos();
});

function criarElementos() {
  // Função que cria Elementos a partir de uma condição específica.
  lengthString = tarefa.value;

  if (lengthString.length > 0) {
    const listTask = document.getElementById("list-task");

    // Seção 1' - Criação de Elementos.
    const li = document.createElement("li");
    const p = document.createElement("p");
    const imgConcluir = document.createElement("img");
    const imgEditar = document.createElement("img");
    const imgExcluir = document.createElement("img");
    const div = document.createElement("div");
    const editarListacomInput = document.createElement("input");
    const inputCheckbox = document.createElement("input");

    // Seção 2' - Setando Atributos / Chamando Classes.
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.classList.add("width");
    editarListacomInput.placeholder =
      "Ex: Fazer compras, estudar, ligar para alguém...";
    editarListacomInput.style.display = "none";
    div.classList.add("icons__editarExcluir");
    imgConcluir.setAttribute("src", "/assets/confirmar.svg");
    imgConcluir.style.display = "none";
    imgEditar.setAttribute("src", "assets/editar_preto.png");
    imgExcluir.setAttribute("src", "/assets/excluir.svg");
    p.textContent = tarefa.value;
    p.classList.add("text__center");

    // Seção 3' - Anexando Elementos dentro de algum Elemento em HTML.
    div.appendChild(imgEditar);
    div.appendChild(imgExcluir);
    li.appendChild(inputCheckbox);
    li.appendChild(imgConcluir);
    li.appendChild(editarListacomInput);
    li.appendChild(p);
    li.appendChild(div);
    listTask.appendChild(li);
    li.classList.add("list__task");
    tarefa.value = "";
    botao.style.backgroundColor = "";
    botao.style.color = "";
    document.getElementById("input-task").placeholder = "O que pretende fazer?";

    function excluirListas() {
      // Função que faz a exclusão das listas ativas em HTML.
      li.style.display = "none";
    }

    imgExcluir.addEventListener("click", () => {
      // Evento que chama a função 'excluirListas' na linha '69'.
      excluirListas();
    });

    function check() {
      // Função que Verifica se o Input Type: Checkout, está ativado ou desativado.
      if (inputCheckbox.checked) {
        li.style.backgroundColor = "rgb(110, 203, 143)";
        li.style.color = "white";
        p.classList.add("decorationConcluido");
      } else {
        li.style.backgroundColor = "";
        li.style.color = "";
        p.classList.remove("decorationConcluido");
      }
    }

    inputCheckbox.addEventListener("click", () => {
      //  Evento de Clique que inicia a 'Função Check'.
      check();
    });

    function editarLista() {
      // Função permite editar o valor da lista chamando um Input.
      if (editarListacomInput.style.display == "none") {
        imgConcluir.setAttribute("src", "");
        imgEditar.style.display = "none";
        editarListacomInput.style.display = "block";
        p.textContent = "";
        editarListacomInput.value = "";
      } else {
        editarListacomInput.style.display = "none";
        imgEditar.setAttribute("src", "assets/editar_preto.png");
        imgConcluir.setAttribute("src", "/assets/confirmar.svg");
        p.classList.remove("decorationConcluido");
        p.textContent = editarListacomInput.value;
      }
    }

    function editandoLista() {
      // Após o clique no ícone de 'editar lista', a função verifica se o tamanho é maior que zero.
      pegarValor = editarListacomInput.value;
      if (pegarValor.length > 0) {
        imgEditar.setAttribute("src", "/assets/confirmar.svg");
        imgEditar.style.display = "block";
      } else {
        imgEditar.style.display = "none";
      }
    }

    imgEditar.addEventListener("click", function () {
      // Evento que chama a Função 'editarLista' na linha '69'.
      editarLista();
    });

    editarListacomInput.addEventListener("input", () => {
      // Evento que chama a Função 'editandoLista' na linha '85'.
      editandoLista();
    });
  }
}
