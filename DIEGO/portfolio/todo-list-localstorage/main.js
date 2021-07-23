// SPECS 
// Ejercicio TODO-APP-LOCAL:
// Queremos construir una aplicacion web para poder gestionar una lista de tareas. La aplicación tendrá las siguientes funcionalidades:
// - Me debe permitir añadir nuevas tareas a la lista
// - Me debe permitir marcar una tarea como hecha (sin borrarla de la lista)
// - Me debe permitir filtrar mis tareas por todas, sin hacer y completadas
// - Me debe mantener el estado de mi lista de tareas aun cuando apague el ordenador y lo vuelva a encender
// El diseño es libre. Si no se os ocurre nada, podéis coger alguna imagen de ejemplo de internet.

let taskArray = [];

// taskArray.push({
//     name: 'hola',
//     description: 'adios',
//     isFinished: false
// });
class task {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.isFinished = false;
    }
}
function cleanMainPageContent() {

    const screen = document.getElementById('main_page_content');
    screen.innerHTML = '';
    setMainContent();
}
function setTasksContent() {

    cleanMainPageContent();
    taskArray.forEach(e => createTaskCard(e));

}
function setTasksContentPending() {

    cleanMainPageContent();

    taskArray.forEach(e => {
        if (!e.isFinished) {
            createTaskCard(e)
        }
    });

}
function setTasksContentCompleted() {

    cleanMainPageContent();

    taskArray.forEach(e => {
        if (e.isFinished) {
            createTaskCard(e)
        }
    });

}
function pushNewTaskToArray(taskName, taskDescription) {

    const newTask = new task(taskName, taskDescription);

    taskArray.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    setTasksContent();

}
function createTaskCard(task) {

    const cardMainContainer = document.getElementById('main_page_content');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    const cardImg = document.createElement('img');
    cardImg.id = 'task_img';
    cardImg.classList.add('task-img');
    if (task.isFinished) {
        cardImg.src = 'assets/img/done-task.png';
    } else {
        cardImg.src = 'assets/img/pending_task.png';
    }
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task.name;
    taskTitle.classList.add('h3');
    const taskDescription = document.createElement('p');
    taskDescription.textContent = task.description;

    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(taskTitle);
    cardContainer.appendChild(taskDescription);

    cardMainContainer.appendChild(cardContainer);

    let taskImg = document.getElementsByClassName('task-img');
    //si hago queryselector puedo usar forEach();
    for (let i = 0; i < taskImg.length; i++) {
        taskImg[i].addEventListener('click', function setTaskCompleted() {
            taskArray[i].isFinished = true;
            localStorage.setItem('tasks', JSON.stringify(taskArray));
            console.log(taskArray[i]);
            setTasksContent();
            //this.taskImg = document.getElementsByClassName('task-img');
        })
    }
}
function setHeaderContent() {
    const pageLogo = document.createElement('img');
    pageLogo.src = 'assets/img/logo-todo-list.png';
    pageLogo.classList.add('logo');

    const header = document.getElementById('main_page_header');

    header.appendChild(pageLogo);

}
function setNavContent() {

    const menuNavTitle = document.createElement('h2');
    menuNavTitle.textContent = 'FILTER TASKS'
    const showFilterForm = document.createElement('form');
    const menuNav = document.createElement('ul');
    menuNav.classList.add('lista');
    const menuElemt1 = document.createElement('li');
    const menuElemt2 = document.createElement('li');
    const menuElemt3 = document.createElement('li');

    // menuNav.classList.add('lista');

    const checkAll = document.createElement('input');
    const label_checkAll = document.createElement('label');
    label_checkAll.classList.add('label');
    checkAll.type = 'radio';
    checkAll.id = 'checked_showAll';
    checkAll.checked = 'checked';
    checkAll.name = 'show_form_option'
    label_checkAll.for = 'checked_showAll';
    label_checkAll.textContent = 'Show all'

    menuElemt1.appendChild(checkAll);
    menuElemt1.appendChild(label_checkAll);
    menuNav.appendChild(menuElemt1);


    const checkToDo = document.createElement('input');
    const label_checkToDo = document.createElement('label');
    label_checkToDo.classList.add('label');
    checkToDo.type = 'radio';
    checkToDo.id = 'checked_showToDo';
    label_checkToDo.for = 'checked_showToDo';
    checkToDo.name = 'show_form_option'
    label_checkToDo.textContent = 'Pending'

    menuElemt2.appendChild(checkToDo);
    menuElemt2.appendChild(label_checkToDo);
    menuNav.appendChild(menuElemt2);


    const checkDone = document.createElement('input');
    const label_checkDone = document.createElement('label');
    label_checkDone.classList.add('label');
    checkDone.type = 'radio';
    checkDone.id = 'checked_showDone';
    checkDone.name = 'show_form_option'
    label_checkDone.for = 'checked_showDone';
    label_checkDone.textContent = 'Completed'

    menuElemt3.appendChild(checkDone);
    menuElemt3.appendChild(label_checkDone);
    menuNav.appendChild(menuElemt3);

    showFilterForm.appendChild(menuNav);
    const nav = document.getElementById('main_page_nav');

    nav.appendChild(menuNavTitle);
    nav.appendChild(showFilterForm);

    const showPending = document.getElementById('checked_showToDo');
    const showCompleted = document.getElementById('checked_showDone');
    const showAll = document.getElementById('checked_showAll');

    //handle events for filtering tasks
    showPending.addEventListener('change', setTasksContentPending);
    showCompleted.addEventListener('change', setTasksContentCompleted);
    showAll.addEventListener('change', setTasksContent);

}
function setMainContent() {

    const cardMainContainer = document.getElementById('main_page_content');

    const taskSection = document.createElement('section');
    taskSection.classList.add('taskSection');
    taskSection.id = 'task_section';
    const taskName = document.createElement('input');
    taskName.required = 'required';
    taskName.id = 'newTaskNameText'
    taskName.classList.add('formElems');
    taskName.type = 'text';
    taskName.placeholder = 'Name your task...'
    const taskDescription = document.createElement('textarea');
    taskDescription.required = 'required';
    taskDescription.id = 'newTaskDescriptionText'
    taskDescription.classList.add('formElems');
    taskDescription.placeholder = 'Write your task description here...';
    taskDescription.cols = '30';
    taskDescription.rows = '5';
    const addTaskButton = document.createElement('input'); //make it button instead of input
    addTaskButton.id = 'btn'
    addTaskButton.classList.add('btn-style');
    addTaskButton.type = 'submit';
    addTaskButton.value = 'Add task'

    taskSection.appendChild(taskName);
    taskSection.appendChild(taskDescription);
    taskSection.appendChild(addTaskButton);

    cardMainContainer.appendChild(taskSection);


    // const addTaskButton = document.getElementById('btn');
    addTaskButton.addEventListener('click', function createNewTask() {

        console.log(taskArray);

        let name = document.getElementById('newTaskNameText').value;
        let description = document.getElementById('newTaskDescriptionText').value;

        pushNewTaskToArray(name, description);
    });

}
function landingPageCreation() {
    //main sections definition
    const header = document.createElement('header');
    header.id = 'main_page_header';
    header.classList.add('header');


    const nav = document.createElement('nav');
    nav.id = 'main_page_nav';
    nav.classList.add('nav');


    const contentScreen = document.createElement('section');
    contentScreen.id = 'main_page_content';
    contentScreen.classList.add('content');

    const footer = document.createElement('footer');
    footer.id = 'main_page_footer';
    footer.classList.add('footer');

    const mainPage = [header, nav, contentScreen, footer];

    //main container definition

    const mainContainer = document.getElementById('mainContainer');
    mainContainer.classList.add('main_container');

    //main section injection to main container

    injectChildsToMainContainer(mainPage, mainContainer);

    setHeaderContent();
    setMainContent();
    setNavContent();

    //setFooterContent();
}
function injectChildsToMainContainer(sectionElements, mainContainer) {

    sectionElements.forEach(e => mainContainer.appendChild(e));

}
landingPageCreation();



if (localStorage.getItem('tasks')) {
    taskArray = JSON.parse(localStorage.getItem('tasks'));
    setTasksContent();
}
//setTasksContent();
























