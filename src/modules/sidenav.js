import { project } from "./projects";

// pulls all projects from local storage 
//populates sidenav with projects under  the projects file
const sideNavList = []


function populateNav(){
    for(let i = 0; i <= localStorage.length; i++){
        const storageItem = localStorage.getItem(i.toString());
        if(storageItem){
            sideNavList.push(JSON.parse(storageItem))
        }       
    }
    console.log(`you have accessed side nav function current functions:\n${sideNavList}`);
}
//populateNav();

export {sideNavList,}