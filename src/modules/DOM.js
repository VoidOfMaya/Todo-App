import '@fortawesome/fontawesome-free/css/all.min.css';

const renderDisplay = function(){
    const mainContainer = document.getElementById('content');
    const head = document.createElement('div');
    const body = document.createElement('div');
    const title = document.createElement('h1');
    const priorityA  = document.createElement('div');
    //priorityA.id = 'A';
    const priorityB  = document.createElement('div');
    //priorityB.id = 'B';
    const priorityC  = document.createElement('div');
    //priorityC.id = 'C';

    mainContainer.style.height = '100vh';
    mainContainer.style.display = 'grid';
    mainContainer.style.gridTemplateRows = '1fr 9fr'; 
    
    
    title.textContent = 'Todo .';
    title.style.fontSize= '52px'
    title.style.justifySelf = 'center';
    title.style.alignSelf = 'center';
    title.style.gridArea= 'title'

    priorityA.style.background = 'linear-gradient(to bottom,rgb(255, 0, 0), #FF4500)';
    priorityA.style.gridArea = 'A';

    priorityB.style.background = 'linear-gradient(to bottom,rgb(243, 158, 0), #FFD700)';
    priorityB.style.gridArea = 'B';

    priorityC.style.background = 'linear-gradient(to bottom,rgb(26, 168, 13), #3CB371)';
    priorityC.style.gridArea = 'C';

    head.style.display = 'grid';
    head.style.gridTemplateColumns = '37fr 1fr 1fr 1fr';
    head.style.gridTemplateAreas =` 'title A B C'`;
    head.style.boxShadow = '0px 42px 93px 36px rgba(0,0,0,0.19)';
    

    head.appendChild(title);
    head.appendChild(priorityA);
    head.appendChild(priorityB);
    head.appendChild(priorityC);
    mainContainer.appendChild(head);
    mainContainer.appendChild(body);


}();

export {renderDisplay,}