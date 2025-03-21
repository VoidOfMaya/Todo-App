import '@fortawesome/fontawesome-free/css/all.min.css';
import { Green,Lgreen,Yellow,Red,white } from './Color';
import { projectsList } from './projects';

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
//side nav handler
function createNavBtn(){
    const navBtn = document.createElement('button');
    navBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
    navBtn.style.border = 'none';
    navBtn.style.padding = '20px 30px';
    navBtn.style.fontSize = '44px';
    navBtn.style.borderRadius = '50px';
    navBtn.style.background = white()
    navBtn.style.justifySelf= 'center';
    navBtn.style.gridArea = 'nav';

    return navBtn
}
function createProjectNav(){
    const projectNav = document.createElement('div');
    const navTitle = document.createElement('h2');

    navTitle.innerHTML = `<i class="fa-solid fa-folder fa-beat" style="color:#ffff;"></i> My Projects`;
    navTitle.style.color = '#ffff';
    navTitle.style.justifySelf = 'center';

    projectNav.style.background = Lgreen();
    projectNav.style.transtion = 'left 1s ease-in-out';
    projectNav.style.left = '-250px';
    projectNav.style.gridArea = 'myProjects';
    //projectNav.style.display = 'grid';
    //projectNav.style.gridTemplateRows = `1fr repeat(${projectsList.length} * 1fr)`;
    return {projectNav, navTitle};
}
function createNavArea(){
    const navArea = document.createElement('div');
    navArea.style.gridArea = 'nav';
    navArea.style.alignContent= 'center';

    navArea.style.gridArea = 'nav';
    navArea.style.alignContent= 'center';

    return navArea
}
function navClickHandler(navButton, container, sidebar, mainSideNav){
    return{
        openSidebar(){
            navButton.addEventListener('mouseover', ()=>{
                container.style.gridTemplate = '  1fr 9fr 1fr/ 3fr 9fr 1fr';
                container.style.gridTemplateAreas = 
                `"myProjects  top top"
                "myProjects center right"
                "myProjects  bottom bottom` 
                sidebar.removeChild(navButton);
                mainSideNav.projectNav.appendChild(mainSideNav.navTitle);                
            })


        },


        closeSidebar(){
            container.addEventListener('click',()=>{
                container.style.gridTemplate = ' 1fr 9fr 1fr/ 1fr 9fr 1fr';
                container.style.gridTemplateAreas = `"top  top top"
                                                "nav center right"
                                                "bottom  bottom bottom` ;
                sidebar.appendChild(navButton);
                mainSideNav.projectNav.removeChild(mainSideNav.navTitle);                  
            })

        }
    }
}
function createBody(){
    const body = document.createElement('div');
    body.style .display = 'grid';
    body.style.gridTemplate = ' 1fr 9fr 1fr/ 1fr 9fr 1fr';
    body.style.gridTemplateAreas = `"top  top top"
                                    "nav center right"
                                    "bottom  bottom bottom` 
    return body
}
function setContainer(){
    const mainContainer = document.getElementById('content');
    mainContainer.style.height = '100vh';
    mainContainer.style.display = 'grid';
    mainContainer.style.gridTemplateRows = '1fr 9fr';  
    return mainContainer;
}
//required body grid sorting functiom
function sortGrid(){
    //code goes
}
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
    const navBtn = createNavBtn();
    const projectNav = createProjectNav();
    const navBar = createNavArea();
    const sideNavEvent = navClickHandler( navBtn, body, navBar, projectNav);
    
    // sidenav trigger event
    sideNavEvent.openSidebar();
    sideNavEvent.closeSidebar();
    
    // element main body container 
    mainContainer.appendChild(header);
    navBar.appendChild(navBtn);
    body.appendChild(navBar);
    body.appendChild(projectNav.projectNav);
    body.appendChild(navBar);
    mainContainer.appendChild(body);

    return{
        body,
        projectNav,
    }

}();

export {renderDisplay,}