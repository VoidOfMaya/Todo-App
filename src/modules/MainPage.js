
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Green,Lgreen,Yellow,Red,white, whiteTop } from './Color';
import { Project, projectsList } from './projects';


//import { projectsList } from './projects';

//header handler
function createLogo(){
    const title = document.createElement('h1');
    title.innerHTML = 'Todo <i class="fa-solid fa-paperclip"></i>';
    title.style.fontSize= '52px'
    title.style.justifySelf = 'center';
    title.style.alignSelf = 'center';
    title.style.gridArea= 'title'
    return title
}
function createStripe(){

    const high  = document.createElement('div');
    const moderate  = document.createElement('div');
    const low  = document.createElement('div');

    high.style.background = Red();
    high.style.gridArea = 'A';

    moderate.style.background = Yellow();
    moderate.style.gridArea = 'B';

    low.style.background = Green();
    low.style.gridArea = 'C';
    return{ high, moderate, low}
}
function createHead(){
    const head = document.createElement('div');
    head.style.display = 'grid';
    head.style.gridTemplateColumns = '37fr 1fr 1fr 1fr';
    head.style.gridTemplateAreas =` 'title A B C'`;
    head.style.boxShadow = '0px 42px 93px 36px rgba(0,0,0,0.19)';
    return head
}

function createProjectNav(body){
    const projectNav = document.createElement('div');
    projectNav.className = 'projectsArea';

    const navTitle = document.createElement('div');

    const addProject = document.createElement('div');
    const proj = createProj();
    //projects list container element
    const projectList = document.createElement('div');
    //list element
    const ul = document.createElement('ul');
    ul.style.display = 'grid';
    ul.style.gridTemplateColumns = '1fr';
    ul.style.rowGap = '10px'; // spacing between list items
    ul.style.padding = '0';
    ul.style.margin = '0';
    ul.style.listStyleType = 'none'
    
;    const listFill = function(){//<================make this populate sidenave with project names from projects list
        for(let i =0; i < projectsList.length; i++){
            const li = document.createElement('li')
            li.innerText = `${ projectsList[i].name}`;
            
            ul.appendChild(li);
        }
    }
    console.log(projectsList);
    listFill();

    addProject.style.gridArea = 'add-project'

    navTitle.style.display = 'inline';
    navTitle.className = 'main-project-file'
    navTitle.style.fontSize = '28px';
    navTitle.style.padding = '20px';
    navTitle.id = 'new-project';
    navTitle.innerHTML = `<i class="fa-solid fa-folder fa-fade" style="color:#ffff;"></i> Projects`;
    navTitle.style.color = '#969696';
    navTitle.style.justifySelf = 'center';

    //projects side navigation
    projectNav.style.background = Lgreen();
    projectNav.style.minWidth = '200px';
    projectNav.style.transtion = 'left 1s ease-in-out';
    projectNav.style.left = '-250px';
    projectNav.style.gridArea = 'myProjects';
    projectNav.style.display = 'grid';
    projectNav.style.gridTemplateRows = `1fr 9fr`;

    navTitle.addEventListener('mouseover',()=>{
        navTitle.innerHTML = '';
        navTitle.innerHTML = `<i class="fa-solid fa-plus fa-beat-fade" style="color:#ffff;"></i> Projects`;}
    )
    navTitle.addEventListener('mouseout',()=>{
        navTitle.innerHTML = '';
        navTitle.innerHTML = `<i class="fa-solid fa-folder fa-fade" style="color:#ffff;"></i> Projects`;}
    )
    navTitle.addEventListener('click', ()=>{
        body.appendChild(proj);
        proj.showModal();
    })
    return {
        projectNav,
        populateSideNav(){
            navTitle.appendChild(addProject);
            projectNav.appendChild(navTitle);
            projectList.appendChild(ul);
            projectNav.appendChild(projectList);

        }
    };
   
}
function createProj(){
    console.log(`project being created`);
    const newProj = document.createElement('dialog');
    const formBody = document.createElement('form');

    newProj.style.minWidth = '400px';

    const projNameI = document.createElement(`input`);
    projNameI.placeholder = 'Project Name';
    projNameI.style.fontSize = '26px';
    projNameI.style.textAlign = 'center';

  
    const projInfoI = document.createElement(`input`);
    projInfoI.placeholder = 'Project discreption';
    projInfoI.style.fontSize = '16px';
    projInfoI.style.textAlign = 'center';

    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'create Project';
    submitBtn.style.borderRadius = '0px 0px 25px 25px';
    submitBtn.style.border = 'none';

    newProj.style.border = 'none';
    newProj.style.borderRadius = '25px'
    newProj.style.height = '25vh';
    newProj.style.width = '50vw';
    newProj.style.padding = '10px';

    formBody.method = 'post';
    formBody.style.display = 'grid';
    formBody.style.gridTemplateRows = '1fr 2fr 1fr';
    formBody.style.height ='100%';

    projNameI.style.border = 'none';
    projNameI.style.outline = 'none';
    projNameI.style.borderRadius = '25px 25px 0px 0px';

    projNameI.addEventListener('click', ()=>{
        projNameI.style.border = 'none';
    });
    
    projNameI.addEventListener('mouseover', ()=>{
        projNameI.style.backgroundColor = `rgb(230, 230, 230)`;
    });
    projNameI.addEventListener('mouseout', ()=>{
        projNameI.style.backgroundColor = `white`;
    });

    projInfoI.style.border = 'none';
    projInfoI.style.outline = 'none';

    projInfoI.addEventListener('mouseover', ()=>{
        projInfoI.style.backgroundColor = `rgb(230, 230, 230)`;
    });
    projInfoI.addEventListener('mouseout', ()=>{
        projInfoI.style.backgroundColor = `white`;
    });

    submitBtn.addEventListener('mouseover',()=>{
        submitBtn.style.backgroundColor = 'rgb(175, 175, 175)';
    })
    submitBtn.addEventListener('mouseout',()=>{
        submitBtn.style.backgroundColor = 'rgb(236, 236, 236)';
    })
    
    submitBtn.addEventListener('click',(e)=>{
        //logic function that creates a project object
        //turns object to json
        //stores jsonn in local storage
        e.preventDefault();
        const proj = new Project(projNameI.value, projInfoI.value); //<=====fix this next programming sessions, make it store properly 
        console.log(`mainpage: ${JSON.stringify(proj)}`);
        proj.pushToStorage();
        
        newProj.close();

    })
    
    formBody.appendChild(projNameI);
    formBody.appendChild(projInfoI);
    formBody.appendChild(submitBtn);
    
    newProj.appendChild(formBody); 

    return newProj;
}
function createNavArea(){
    const navArea = document.createElement('div');
    navArea.style.gridArea = 'nav';
    navArea.style.alignContent= 'center';
    navArea.style.gridArea = 'nav';
    navArea.style.alignContent= 'center';

    return navArea
}

function createBody(){
    const body = document.createElement('div');
    body.style.margin = '0px';
    body.style .display = 'grid';
    body.style.gridTemplate = ' 1fr 9fr 1fr/ 2fr 9fr 1fr';
    body.style.gridTemplateAreas = `"myProjects  main-content main-content"
                                    "myProjects main-content main-content"
                                    "myProjects  main-content main-content` 
    return body
}
function setContainer(){
    const mainContainer = document.getElementById('content');
    mainContainer.style.height = '100vh';
    mainContainer.style.display = 'grid';
    mainContainer.style.gridTemplateRows = '1fr 9fr';  
    return mainContainer;
}
// main content display
function createContentDisplay(){
    const contentDisplay = document.createElement('div');
    contentDisplay.id = 'main-Content';
    contentDisplay.style.gridArea = 'main-content';
    return contentDisplay;
}
//required body grid sorting functiom
function sortGrid(){
    //code goes
}
//display
const renderDisplay = function(){

    const mainContainer = setContainer();
    const body = createBody();

    //intialize head//
    const header = createHead();
    const title = createLogo();
    const priority = createStripe();
    
    //  asymble header
    header.appendChild(title);
    header.appendChild(priority.high);
    header.appendChild(priority.moderate);
    header.appendChild(priority.low);
    
    //intialize side nav//
 
    const projectNav = createProjectNav(body);
    const navBar = createNavArea();
    projectNav.populateSideNav();

    //main content display
    const contentWin = createContentDisplay();
    
    // element main body container 
    mainContainer.appendChild(header);
   // navBar.appendChild(navBtn);
    body.appendChild(navBar);
    body.appendChild(projectNav.projectNav);
    body.appendChild(navBar);
    body.appendChild(contentWin);
    mainContainer.appendChild(body);

    return{
        body,
        projectNav,
    }

}();

export {renderDisplay,}
