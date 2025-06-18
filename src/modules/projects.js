import{todoItem} from "./todoItem.js"

class Project{
    //static #nextId= 0;
    #todoList = [];
    constructor(name, description){
        this.id= 1
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
    
        const stored = localStorage.getItem('projects');
        const projects = stored ? JSON.parse(stored): [];

        const filtered = projects.filter(p=> p.id !== this.id);
        filtered.push(this);
        console.log(`projectpage: ${filtered}`);

        localStorage.setItem('projects', JSON.stringify(filtered));
    }
    getFromStorage(){ //<======make this functional; for retrieving from local storage  to populate the sidenav
        const data = localStorage.getItem('projects');
        return data ? JSON.parse(data) : [];
    }
    clearStorage(){

    }

}

export{
    Project,        
}