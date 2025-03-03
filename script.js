const addButton= document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

loadTasks();

function addTask() {
    const task = taskInput.value.trim();
    if(task) {
        createTaskElement(task);
        taskInput.value = '';
        saveTasks();
    } else{
        alert('Please enter a task');
    }
};

addButton.addEventListener('click', addTask);

function createTaskElement(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
     // Création du bouton de suppression
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '🗑️'; // Icône poubelle
     deleteButton.classList.add('delete-btn');

     deleteButton.addEventListener('click', function() {
         listItem.remove(); // Supprime l'élément <li>
         saveTasks();  // Met à jour le localStorage
     });
     
     listItem.appendChild(deleteButton);
     taskList.appendChild(listItem);
};

function saveTasks(){
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTaskElement);
};

