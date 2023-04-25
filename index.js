// Selecione os elementos do HTML que vamos manipular
const form = document.querySelector("form.conteudo");
const input = form.querySelector("input");
const ul = document.querySelector("ul.tarefas");

// Adicione um event listener para o submit do formulário
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Previne o comportamento padrão do formulário
  const text = input.value.trim(); // Obtém o valor do input e remove espaços em branco
  if (text !== "") {
    // Verifica se o texto não é vazio
    const li = createTask(text); // Cria um novo item da lista de tarefas
    ul.appendChild(li); // Adiciona o item à lista
    input.value = ""; // Limpa o valor do input
  }
});

// Função para criar um novo item da lista de tarefas
function createTask(text) {
  const li = document.createElement("li"); // Cria um novo elemento li
  const span = document.createElement("span"); // Cria um novo elemento span
  const button = document.createElement("button"); // Cria um novo elemento button

  span.textContent = text; // Adiciona o texto à span
  button.textContent = "X"; // Adiciona um texto ao botão

  // Adiciona um event listener para o clique no botão
  button.addEventListener("click", function () {
    li.remove(); // Remove o item da lista
  });

  li.appendChild(span); // Adiciona a span ao elemento li
  li.appendChild(button); // Adiciona o botão ao elemento li

  return li; // Retorna o elemento li
}
