// Padrão de camelCase 
// (primeira letra minúscula e a próxima palavra a primeira letra maiúscula)
function addTask() {
  console.log("Entrou dentro da função addTask");

  // Pega o input
  var input = document.getElementById("input-tarefa");

  // Pega o valor do input
  var inputValue = input.value;

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


  console.log(inputValue)
}