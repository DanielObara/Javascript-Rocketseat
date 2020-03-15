var listElements = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodo(){
    listElements.innerHTML = '';
    for(todo of todos){
        todoElement = document.createElement('li');
        todoText = document.createTextNode(todo);
         var linkElement = document.createElement('a');
         linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'dellTodo('+ pos +')');
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElements.appendChild(todoElement);
    
    }
}

renderTodo();


function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodo();
    saveToStorage();
}

buttonElement.onclick = addTodo;


function dellTodo(pos){
    todos.splice(pos, 1);
    renderTodo();
    saveToStorage();
}


function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}