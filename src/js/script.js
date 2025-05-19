/**
 * Requisitos do nosso app
 * [x] Adicionar uma tarefa ao clicar com o Enter
 * [x] Não deixar adicionar uma tarefa vazia
 * [x] Adicionar um icon
 * [x] Adicionar uma imagem no html
 * [x] Adicionar uma modal de confirmação
 */


var meuInput = document.getElementById("input-tarefa");


// Adicionar um evento de keypress no input
meuInput.addEventListener("keypress", function(event) {

  // Verificar se a tecla pressionada foi o Enter
  if(event.key == "Enter") {
    // Vou chamar a função addTask
    addTask()
  }
})


// Padrão de camelCase 
// (primeira letra minúscula e a próxima palavra a primeira letra maiúscula)
function addTask() {
  console.log("Entrou dentro da função addTask");

  // Pega o input
  var input = document.getElementById("input-tarefa");

  // Pega o valor do input
  var inputValue = input.value;

  if(inputValue.trim() == null) {

    alert("Digite uma tarefa");

    return
  }

  // Limpar o input
  input.value = "";

  // Pega a lista de tarefas
  var list = document.getElementById("lista-tarefas")

  // Criar um elemento li
  var li = document.createElement("li");

  // Adicionar o valor do INPUT para o LI
  // li.innerText = inputValue;
  // li.innerHTML = "Minha tarefa <button>Excluir</button>";
  // li.innerHTML = inputValue + " <button>Excluir</button>";
  li.innerHTML = `${inputValue} <button onclick="this.parentElement.remove()" >🗑️</button>`;

  // Adicionar a função de marcar a tarefa como concluída
  li.onclick = function() {
    li.className = "tarefa-concluida";
  }

  // Adicionar o LI na lista de tarefas
  list.appendChild(li)

  showModal()


  console.log(inputValue)
}

function showModal() {

  // Pega a modal
  var modal = document.getElementById("modal-sucesso");

  
  // Adicionar audio
  var audio = document.getElementById("audio-teste");
  audio.play();
  


  // Adiciona o css da modal 
  modal.classList.add('open-modal');

  setTimeout(function() {
    // Remove o css da modal
    modal.classList.remove('open-modal');
  }, 3000);
}