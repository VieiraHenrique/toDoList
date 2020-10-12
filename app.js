const todoInput = document.getElementById('todoInput');
const todoSubmit = document.getElementById('todoSubmit');
const list = document.getElementById('list');
const template = document.querySelector('template');
const clear = document.getElementById('clear');

document.addEventListener('DOMContentLoaded', function(){
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((task)=>{
        let newItem = document.createElement('li');
        newItem.innerHTML = template.innerHTML;
        newItem.querySelector('p').innerText = task;
        list.appendChild(newItem);
        const trash = newItem.querySelector('i').addEventListener('click', function(){
            this.parentElement.remove()
            removeFromLS(this.parentElement.querySelector('p').innerText)
            })
    })
})

todoSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    let item = todoInput.value;
    if (item !== '') {
        let newItem = document.createElement('li');
        newItem.innerHTML = template.innerHTML;
        newItem.querySelector('p').innerText = item
        list.appendChild(newItem);
        storeInLocalStorage(item);
        todoInput.value = '';
        const trash = newItem.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove()
        removeFromLS(this.parentElement.querySelector('p').innerText)
        })
    }  
})

function removeFromLS(item) {
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((el, indx)=>{
        if (item===el) {
            tasks.splice(indx,1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function storeInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

clear.addEventListener('click', function(){
    list.innerHTML = '';
    localStorage.clear();
})