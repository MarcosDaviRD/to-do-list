let tarefa = document.getElementById("input-task");
let containerPrincipal = document.getElementById("container");

const botao = document.getElementById("addtask");
lengthString = tarefa.value;

function verificaoInputVazio() {
  // Função que verifica se o valor do Input é vázio
  lengthString = tarefa.value;
  if (lengthString.length == 0) {
    // Se for vázio ele não permite que o valor seja enviado, ou seja, aciona a função da linha '27'.
    let tarefa = document.getElementById("input-task");
    tarefa.classList.add("placeholder");
    tarefa = document.getElementById("input-task").placeholder =
      "Campo vázio, adicione uma tarefa...";
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
    let alertaExcluir = document.createElement("div");
    let ul_div_excluir = document.createElement("ul");
    let lista1_excluir = document.createElement("li");
    let lista2_excluir = document.createElement("li");
    let lista3_excluir = document.createElement("li");
    // let divTeste = document.createElement('div')

    // Seção 2' - Setando Atributos / Chamando Classes.
    editarListacomInput.placeholder = "Ex: Fazer compras, estudar...";
    editarListacomInput.style.display = "none";
    div.classList.add("icons__editarExcluir");
    imgConcluir.setAttribute("src", "/assets/confirmar.svg");
    imgConcluir.style.display = "none";
    imgEditar.setAttribute("src", "assets/editar_preto.png");
    imgExcluir.setAttribute("src", "/assets/excluir.svg");
    // imgExcluir.style.float = "right"
    editarListacomInput.style.width = "424px"
    li.classList.add("list__task");
    p.textContent = tarefa.value;
    // divTeste.classList.add("teste")
    // divTeste.innerText = "Testando"


    // Seção 3' - Anexando Elementos dentro de algum Elemento em HTML.
    div.appendChild(imgEditar);
    div.appendChild(imgExcluir);
    // li.appendChild(inputCheckbox);
    li.appendChild(imgConcluir);
    li.appendChild(editarListacomInput);
    li.appendChild(p);
    li.appendChild(div);
    // li.appendChild(divTeste)
    li.appendChild(alertaExcluir);
    listTask.appendChild(li);

    alertaExcluir.appendChild(ul_div_excluir);
    tarefa.value = "";
    botao.style.backgroundColor = "";
    botao.style.color = "";
    document.getElementById("input-task").placeholder = "O que pretende fazer?";

    function mostrarExclusao() {
      // Função que faz a exclusão das listas ativas em HTML.
      alertaExcluir.classList.add("ctn__removerLista");
      setTimeout(() => {
        alertaExcluir.style.maxWidth = "450px";
      }, 100);

      setTimeout(() => {
        ul_div_excluir.style.opacity = "1"
      }, 300);

      ul_div_excluir.classList.add("excluir_listas");
      ul_div_excluir.appendChild(lista1_excluir);
      ul_div_excluir.appendChild(lista2_excluir);
      ul_div_excluir.appendChild(lista3_excluir);
      lista1_excluir.textContent = "EXCLUIR\nESTE ITEM";
      lista2_excluir.textContent = "SIM";
      lista3_excluir.textContent = "NÃO";
    }

    imgExcluir.addEventListener("click", () => {
      // Evento que chama a função 'excluirListas' na linha '69'.
      mostrarExclusao();
    });

    function esconderExclusao() {
        li.style.display = "none";
    }

    function naoExcluir(){
      setTimeout(() => {
        ul_div_excluir.style.opacity = "0"
      }, 100);
      alertaExcluir.style.maxWidth = "0px";
    }

    lista2_excluir.addEventListener("click", () => {
      esconderExclusao();
    });

    lista3_excluir.addEventListener('click', ()=>{
      naoExcluir()
    })

    // function check() {
    //   // Função que Verifica se o Input Type: Checkout, está ativado ou desativado.
    //   if () {
    //     li.style.backgroundColor = "rgb(10, 203, 143)";
    //     li.style.color = "white";
    //     p.classList.add("decorationConcluido");
    //     imgEditar.style.opacity = "0";
    //     imgEditar.style.display = "none";
    //     editarListacomInput.style.display = "none";
    //     p.style.display = "block";
    //     setTimeout(() => {
    //       imgEditar.style.display = "none";
    //     }, 1000);
    //   } else {
    //     li.style.backgroundColor = "";
    //     li.style.color = "";
    //     p.classList.remove("decorationConcluido");
    //   }
    // }

    // inputCheckbox.addEventListener("click", () => {
    //   //  Evento de Clique que inicia a 'Função Check'.
    //   check();
    // });

    function editarLista() {
      // Função permite editar o valor da lista chamando um Input.
      if (editarListacomInput.style.display == "none") {
        imgConcluir.setAttribute("src", "");
        imgEditar.style.display = "none";
        editarListacomInput.style.display = "block";
        editarListacomInput.value = p.textContent;
        p.style.display = "none";
        return;
      } else {
        p.style.display = "block";
        editarListacomInput.style.display = "none";
        imgEditar.setAttribute("src", "assets/editar_preto.png");
        imgConcluir.setAttribute("src", "/assets/confirmar.svg");
        p.classList.remove("decorationConcluido");
        p.textContent = editarListacomInput.value;
        return;
      }
    }

    function editandoLista() {
      // Após o clique no ícone de 'editar lista', a função verifica se o tamanho é maior que zero.
      pegarValor = editarListacomInput.value;
      if (pegarValor.length > 0) {
        imgEditar.setAttribute("src", "/assets/confirmar.svg");
        imgEditar.style.display = "inline-block";
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
