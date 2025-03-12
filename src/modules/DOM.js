import '@fortawesome/fontawesome-free/css/all.min.css';


const renderDisplay = function(){
    const mainContainer = document.getElementById('content');
    //global elements
    const head = document.createElement('div');
    const body = document.createElement('div');
    //head elements
    const title = document.createElement('h1');
    const priorityA  = document.createElement('div');
    const priorityB  = document.createElement('div');
    const priorityC  = document.createElement('div');
    // body elements
    const navArea = document.createElement('div');
    const navBtn = document.createElement('div');
    const projectNav = document.createElement('div');
    const center = document.createElement('div');
    const top = document.createElement('div');
    const bottom = document.createElement('div');
    const right = document.createElement('div');
    
    //global container
    mainContainer.style.height = '100vh';
    mainContainer.style.display = 'grid';
    mainContainer.style.gridTemplateRows = '1fr 9fr'; 
    
    // logo
    title.innerHTML = 'Todo <i class="fa-solid fa-paperclip"></i>';
    title.style.fontSize= '52px'
    title.style.justifySelf = 'center';
    title.style.alignSelf = 'center';
    title.style.gridArea= 'title'
    // header design
    priorityA.style.background = 'linear-gradient(to bottom,rgb(255, 0, 0), #FF4500)';
    priorityA.style.gridArea = 'A';

    priorityB.style.background = 'linear-gradient(to bottom,rgb(243, 158, 0), #FFD700)';
    priorityB.style.gridArea = 'B';

    priorityC.style.background = 'linear-gradient(to bottom,rgb(33, 173, 20), #3CB371)';
    priorityC.style.gridArea = 'C';
    //header
    head.style.display = 'grid';
    head.style.gridTemplateColumns = '37fr 1fr 1fr 1fr';
    head.style.gridTemplateAreas =` 'title A B C'`;
    head.style.boxShadow = '0px 42px 93px 36px rgba(0,0,0,0.19)';
    //nav button
    navBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
    navBtn.style.padding = '20px 30px';
    navBtn.style.fontSize = '44px';
    navBtn.style.borderRadius = '50px';
    navBtn.style.background = 'linear-gradient(to left,rgb(255, 255, 255),rgb(233, 233, 233))';
    navBtn.style.justifySelf= 'center';
    
    //nav list
    projectNav.style.background = 'linear-gradient(to bottom,rgb(63, 189, 52),rgb(255, 255, 255))';
    projectNav.style.transtion = 'left 1s ease-in-out';
    projectNav.style.left = '-250px';
    projectNav.style.gridArea = 'myProjects';
    // nav area
    navArea.style.gridArea = 'nav';
    navArea.style.alignContent= 'center';
    navBtn.addEventListener('mouseover',()=>{

        projectNav.style.left = '0px';
        body.style.gridTemplate = '  1fr 9fr 1fr/ 3fr 9fr 1fr';
        body.style.gridTemplateAreas = 
        `"myProjects  top top"
        "myProjects center right"
        "myProjects  bottom bottom` 
        navArea.removeChild(navBtn);


    })
        body.addEventListener('click',()=>{
        projectNav.style.left = '-250px';
        body.style.gridTemplate = ' 1fr 9fr 1fr/ 1fr 9fr 1fr';
        body.style.gridTemplateAreas = `"top  top top"
                                        "nav center right"
                                        "bottom  bottom bottom` ;
        navArea.appendChild(navBtn);
    })



    

    //place holder divs
    center.style.gridArea = 'center';
    top.style.gridArea = 'top';
    bottom.style.gridArea = 'bottom';
    right.style.gridArea = 'right';

    //body
    body.style .display = 'grid';
    body.style.gridTemplate = ' 1fr 9fr 1fr/ 1fr 9fr 1fr';
    body.style.gridTemplateAreas = `"top  top top"
                                    "nav center right"
                                    "bottom  bottom bottom` 
    



    head.appendChild(title);
    head.appendChild(priorityA);
    head.appendChild(priorityB);
    head.appendChild(priorityC);
    
    navArea.appendChild(navBtn);
    navArea.appendChild(projectNav);
    
    body.appendChild(navArea);
    body.appendChild(projectNav);

    mainContainer.appendChild(head);
    mainContainer.appendChild(body);

}();

export {renderDisplay,}