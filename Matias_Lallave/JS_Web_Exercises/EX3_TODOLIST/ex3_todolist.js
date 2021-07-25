//----------DOM CONFIGURATION----------

const wholeContainer = document.createElement('article');

const title = document.createElement('h1');
title.textContent = "TO-DO LIST";
title.classList.add('title');

const formulary = document.createElement('form');
formulary.classList.add('form');

const inputText = document.createElement('input');
inputText.classList.add('form', 'input_text');
inputText.placeholder = "What's next TO-DO?";
inputText.type = 'text';
inputText.id = 'todonext';

const inputButton = document.createElement('input');
inputButton.classList.add('form', 'button_like');
inputButton.type = 'submit';
inputButton.value = 'ADD!';

const buttonBlock = document.createElement('div');
buttonBlock.classList.add('block_position');

const buttonToDo = document.createElement('button');
buttonToDo.textContent = 'TO-DO';
buttonToDo.classList.add('button_like', 'red_backgr');

const buttonAll = document.createElement('button');
buttonAll.textContent = 'ALL';
buttonAll.classList.add('button_like', 'yellow_backgr');

const buttonDone = document.createElement('button');
buttonDone.textContent = 'DONE';
buttonDone.classList.add('button_like', 'green_backgr');

const listBlock = document.createElement('div');
listBlock.classList.add('form');

const listToDo = document.createElement('ul');
listToDo.classList.add('no_dots', 'list_position');

listBlock.appendChild(listToDo);

buttonBlock.appendChild(buttonDone);
buttonBlock.appendChild(buttonAll);
buttonBlock.appendChild(buttonToDo);

formulary.appendChild(inputText);
formulary.appendChild(inputButton);

wholeContainer.appendChild(title);
wholeContainer.appendChild(formulary);
wholeContainer.appendChild(buttonBlock);
wholeContainer.appendChild(listBlock);

document.body.appendChild(wholeContainer);

//----------FUNCTIONS----------

function closeTask() {
    toDoArray[this.getAttribute('data-index')].taskDone = true;
    localStorage.removeItem('taskArray');
    localStorage.setItem('taskArray', JSON.stringify(toDoArray));
    this.classList.add('taskDone');
}

function getToDoElement(e) {
    let task = {
        name: inputText.value,
        taskDone: false,
    }

    const index = toDoArray.push(task);

    localStorage.setItem('taskArray', JSON.stringify(toDoArray));

    const taskDOM = document.createElement('li');
    taskDOM.textContent = inputText.value;
    taskDOM.setAttribute('data-index', index - 1);
    taskDOM.classList.add('text_size', 'check_margin');

    taskDOM.addEventListener('click', closeTask);

    listToDo.appendChild(taskDOM);

    e.preventDefault();
    inputText.value = '';
}

function printToDoList(toDoArray) {
    toDoArray.forEach((v, i) => printToDoTask(v, i));
}

function printToDoTask(task, position) {
    const taskDOM = document.createElement('li');
    taskDOM.textContent = task.name;
    taskDOM.setAttribute('data-index', position);
    taskDOM.classList.add('text_size', 'check_margin');

    if (task.taskDone === true) {
        taskDOM.classList.add('taskDone');
    }

    taskDOM.addEventListener('click', closeTask);

    listToDo.appendChild(taskDOM);
}

function toDoOnly() {
    listToDo.innerHTML = '';

    toDoArray.forEach((v, i) => {
        if (v.taskDone === false) {
            printToDoTask(v, i);
        }
    });
}

function doneOnly() {
    listToDo.innerHTML = '';

    toDoArray.forEach((v, i) => {
        if (v.taskDone === true) {
            printToDoTask(v, i);
        }
    });
}

function all() {
    listToDo.innerHTML = '';

    printToDoList(toDoArray);
}

//----------INITIALISING DATA AND SUBMIT----------

let toDoArray = JSON.parse(localStorage.getItem('taskArray'));

toDoArray !== null ? printToDoList(toDoArray) : toDoArray = [];

formulary.addEventListener('submit', getToDoElement);

//----------ACTION BUTTONS----------

buttonToDo.addEventListener('click', toDoOnly);

buttonDone.addEventListener('click', doneOnly);

buttonAll.addEventListener('click', all);