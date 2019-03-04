var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//Preenchendo a lista de Todos pegando da storage e caso esteja vazio, inserir um Array vazio
var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

//Função que renderiza os todos.
function renderTodos() {
  //limpando o html antes de renderizar novamente
  //caso não limpassemos e salvasse um novo todo, toda a lista se repetiria.
  listElement.innerHTML = "";
  for (todo of todos) {
    console.log("TCL: renderTodos -> todo", todo);
    //Criando elemento li
    var todoElement = document.createElement("li");

    //Criando o texto do li
    var todoText = document.createTextNode(todo);

    //Criando o elemento link a
    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);

    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    //Criando to texto do link a
    var linkText = document.createTextNode("Exluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);

    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}
renderTodos();
function addTodo() {
  var todoText = inputElement.value;
  console.log("TCL: addTodo -> todoText", todoText);
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  savaToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  savaToStorage();
}

function savaToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
