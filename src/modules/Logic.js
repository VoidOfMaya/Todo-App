import{format} from 'date-fns';
class todoItem{
    constructor(title, description, date, priority, notes, status){
        this.title = title;
        this.description = description;
        this.date = format(new Date(date), "dd-MM-yyyy");
        this.priority = priority;
        this.notes = notes;
        this.status = status;
    }
};
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

export {todoItem, project}