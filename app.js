//Tüm elementleri seçme 
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

//Todo ekleyeceğimiz için form'a submit özelliği eklememiz lazım
//Todolarımızı list-item olarak eklememiz lazım

eventListener(); //sayfamız açıldığında eventlerimizi seçicez ve bu fonksiyonumuz çalışacak

//tüm eventlerimizi buraya yazıcaz
function eventListener() {
    form.addEventListener("submit", addTodo); //submit olduğunda addTodo'yu çalıştır diyorum
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e){
    //ilk olarak arayüzden todosları kaldırıcaz
    if(confirm("Tümünü silmek istediğine emin misiniz ?")){
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item"); //sayfadaki tüm li'leri seçiyoruz

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            listItem.setAttribute("style", "display:none !important");
        }
        else {
            listItem.setAttribute("style", "display:block");
        }
    });
}

function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1);//Arrey'den değer silme.
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Silme işlemi başarıyla gerçekleşti");
    }
}


//Sayfayı yenilediğimizde storagedeki değerleri arayüze ekler
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}
function addTodo(e) {
    //inputtaki değerleri almak istiyoruz,ald değeri newTodo'ya atıcaz 
    const newTodo = todoInput.value.trim();
    if (newTodo == "") {
        showAlert("danger", "Lütfen bir mesaj girin...");
    }
    else {
        // aldığımız newTodoyu listItem'a ekleyeceğiz(sayfayı dinamikleştiriyoruz)
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo başarıyla eklendi...");
    }
    e.preventDefault();
}
function getTodosFromStorage() { //Storageden bütün todoları almış olacak.
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    //göndrilen todoyu storage'ye eklememiz lazım:
    todos.push(newTodo);
    //şimdide storageyi güncellememiz gerek:
    localStorage.setItem("todos", JSON.stringify(todos));
}
function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    setTimeout(function () {
        alert.remove();
    }, 1000);
}
//Arayüze ekleme işlemlerini buradan yapıcaz,ald newTodoyu listItem'a ekleyeceğiz
function addTodoToUI(newTodo) {
    //element üreticez
    //Link ve listItem oluşturma işlemimiz:
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";
    //Text node ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    //oluşt li'yi ul'ye (".list-group'a)eklememiz lazım
    //Todo List'e ListItem'ı ekleme:
    todoList.appendChild(listItem);

    //input bölümünü yazdıktan sonra boşaltmak için:
    todoInput.value = "";
}