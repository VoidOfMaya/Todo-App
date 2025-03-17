import { renderDisplay } from "./MainPage";



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
}

export{project,}