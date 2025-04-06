
import { renderDisplay } from "./modules/MainPage";
import{Project} from "./modules/projects.js"
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

//const defaultProject = new Project('default', 'this is the default set project');
defaultProject.addTodo('walk the dog', 'take the dog out for a walk to the park with jhon', '11-11-2025', 'low', 'none');
localStorage.setItem(defaultProject.name, JSON.stringify(defaultProject));
console.log(` we are in ${process.env.NODE_ENV}`);
console.log(JSON.parse(localStorage.getItem('default')));