import { todoItem,project } from "./modules/Logic";
import { renderDisplay } from "./modules/DOM";
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const defaultProject = new project('default', 'this is the default set project');
defaultProject.addTodo('walk the dog', 'take the dog out for a walk to the park with jhon', '11-11-2025', 'low', 'none')

console.log(` we are in ${process.env.NODE_ENV}`);
console.log(defaultProject.viewTodoList());

