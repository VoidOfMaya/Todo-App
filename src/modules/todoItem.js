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

export{todoItem}