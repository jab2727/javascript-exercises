class ToDo {
  constructor(project, description, dueDate, priority) {
    this.project = project;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  toDoToStorage = function () {
    // This sends the to-do to storage.
    const toAdd = {
      project: this.project,
      description: this.description,
      due: this.dueDate,
      priority: this.priority,
    };
    localStorage.setItem(localStorage.length, JSON.stringify(toAdd));
  };

  toDoAdder = function () {
    // This sends it to the webpage.
    const newTodoCard = document.createElement("div");
    const newTodoDescription = document.createElement("p");
    const newTodoDate = document.createElement("p");
    const newTodoPriority = document.createElement("p");
    const todoDeleteButton = document.createElement("button");

    newTodoCard.className = "generated";
    newTodoDescription.innerText = `Description: ${this.description}`;
    newTodoDate.innerText = `Due: ${this.dueDate}`;
    newTodoPriority.innerText = `Priority: ${this.priority}`;
    todoDeleteButton.innerText = "Delete";

    todoDeleteButton.addEventListener("click", () => {
      // First we delete it from the local storage:
      for (let i = localStorage.length - 1; i >= 0; i--) {
        entry = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(entry.description);
        console.log(newTodoDescription.innerText);
        if (entry.description == this.description) {
          localStorage.removeItem(localStorage.key(i));
        }
      }

      // Then we delete the card in the HTML:
      newTodoCard.remove();
    });

    newTodoCard.appendChild(newTodoDescription);
    newTodoCard.appendChild(newTodoDate);
    newTodoCard.appendChild(newTodoPriority);
    newTodoCard.appendChild(todoDeleteButton);
    todos.appendChild(newTodoCard);
  };
}

const projects = document.getElementById("projects");
let todos = document.getElementById("todos");
const newProjectButton = document.getElementById("new-project");
const newTodoButton = document.getElementById("project-title");
const ProjectNameList = [];
let activeProjectName = [];

// This loads saved projects.
for (let i = 0; i < localStorage.length; i++) {
  entry = JSON.parse(localStorage.getItem(localStorage.key(i)));
  newProject(entry.project);
}

newProjectButton.addEventListener("click", () =>
  newProject(prompt("Enter new project name:")),
);

function newProject(newProjectName) {
  const nameCheck = ProjectNameList.filter(
    (newName) => newName == newProjectName,
  );

  if (newProjectName.length > 0 && nameCheck.length == 0) {
    ProjectNameList.push(newProjectName);
    activeProjectName = newProjectName;
    newTodoButton.textContent = `Active Project: ${newProjectName}`;

    const newProjectCard = document.createElement("div");
    const newProjectText = document.createElement("p");
    const newDeleteButton = document.createElement("button");

    newProjectCard.id = activeProjectName;
    newProjectText.innerText = newProjectName;
    newDeleteButton.innerText = "Delete";

    newProjectCard.addEventListener("click", () => {
      activeProjectName = newProjectCard.id;
      newTodoButton.textContent = `Active Project: ${newProjectName}`;
      activeProjectTodoListUpdater();
    });

    newDeleteButton.addEventListener("click", () => {
      // First we delete the project from the project name list:
      const index = ProjectNameList.indexOf(newProjectText.innerText);
      ProjectNameList.splice(index, 1);

      // Then we delete it from the local storage:
      for (let i = localStorage.length - 1; i >= 0; i--) {
        entry = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (entry.project == newProjectText.innerText) {
          localStorage.removeItem(localStorage.key(i));
        }
      }

      // Then we delete the card in the HTML:
      newProjectCard.remove();
    });

    newProjectCard.appendChild(newProjectText);
    newProjectCard.appendChild(newDeleteButton);
    projects.appendChild(newProjectCard);
    activeProjectTodoListUpdater();
  }
}

document.getElementById("submit").addEventListener("click", () => {
  const a = activeProjectName;
  const b = document.getElementById("description").value;
  document.getElementById("description").reset;
  const c = document.getElementById("dueDate").value;
  document.getElementById("dueDate").reset;
  const d = document.querySelector('input[name="priority"]:checked').value;
  document.querySelector('input[name="priority"]:checked').reset;

  const newToDo = new ToDo(a, b, c, d);
  newToDo.toDoToStorage();
  newToDo.toDoAdder();
});

function activeProjectTodoListUpdater() {
  // First we delete the displayed items.
  const oldTodos = document.getElementsByClassName("generated");
  if (oldTodos.length > 0) {
    for (let i = oldTodos.length - 1; i >= 0; i--) {
      oldTodos[i].remove();
    }
  }

  // Then we add back the items with a matching project name.
  for (let i = 0; i < localStorage.length; i++) {
    entry = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (entry.project == activeProjectName) {
      a = entry.project;
      b = entry.description;
      c = entry.due;
      d = entry.priority;
      newCardData = new ToDo(a, b, c, d);
      newCardData.toDoAdder();
    }
  }
}
