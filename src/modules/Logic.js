import{format} from 'date-fns';
class todoItem{
    constructor(title, description, date, priority, notes, checkList, status){
        this.title = title;
        this.description = description;
        this.date = format(new Date(date), "dd-MM-yyyy");
        this.priority = priority;
        this.notes = notes;
        this.checkList = checkList;
        this.status = status;
    }
};
class project{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
    createTodo(){

    }
}

export {todoItem,}