const todoInput = document.getElementById('todoInput');
const todoSubmit = document.getElementById('todoSubmit');
const list = document.getElementById('list');
const template = document.querySelector('template');
const clear = document.getElementById('clear');

todoSubmit.addEventListener('click', function () {
    let item = todoInput.value;
    if (item !== '') {
        let newItem = document.createElement('li');
        newItem.innerHTML = template.innerHTML;
        newItem.querySelector('p').innerText = item
        list.appendChild(newItem);
        todoInput.value = ''
        const trash = newItem.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove()
        })
    }
    
})

clear.addEventListener('click', function(){
    list.innerHTML = '';
})