import{todoItem} from "./todoItem.js"

const projectsList = [];

class project{
    #todoList = [];
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
    addTodo(title, description, date, priority, notes,){
        const todo = new todoItem(title, description, date, priority , notes);
        todo.status = 'incomplete';
        this.#todoList.push(todo);

    }
    viewTodoList(){
        console.log(this.#todoList);
    }
    newProject(name, des){
        const newProj = new project(name, des);
        projectsList.push(newProj);
        localStorage.setItem(newProj.name, JSON.stringify(newProj))
    }
    removeProject(project){
        projectsList.splice(project,1);
    }

}

export{
    projectsList,
    project,
        
}