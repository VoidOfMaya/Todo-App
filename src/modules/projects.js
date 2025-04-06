import{todoItem} from "./todoItem.js"

const projectsList = [];

class Project{
    #id= 0;
    #todoList = [];
    constructor(name, description){
        this.#id = this.#generateId(this.#id );
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
    pushToStorage(){
    
        const jsonObj = JSON.stringify(this.name)+JSON.stringify(this.description)+JSON.stringify(this.#todoList)
        localStorage.setItem(this.#id, jsonObj );
    }
    getFromStorage(){
        const storedObj = localStorage.getItem(this.#id)
    }
    removeProject(project){
        projectsList.splice(project,1);
    }
    #generateId(id){
        
        return id+1
    }

}

export{
    projectsList,
    Project,
        
}