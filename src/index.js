import _ from 'lodash';
import'./style.css';
import { createNavbar, bgPic, someTxt} from './homepage';
import { menu } from './menu';
import { About } from './about';





const divContent = document.querySelector("#content");


const header = document.createElement('div');

const mainContent = document.createElement('div')

const footer = document.createElement('div');

header.appendChild(createNavbar());


divContent.append(header, mainContent, footer);




const tabs = document.querySelectorAll('[data-tab]');


const toggleContent = function () {
  
    
        
    let currentTab = this.getAttribute('data-tab');

      if(currentTab === "home") {
        mainContent.replaceChildren()
       mainContent.appendChild(someTxt());
        

        
      }  

      if(currentTab === "menu") {
       
        mainContent.replaceChildren()
        mainContent.appendChild(menu());

       
      } 

      if(currentTab === "about") {
        mainContent.replaceChildren()
        mainContent.appendChild(About());
      
      } 
      } 


    





Array.from(tabs).forEach( item => {
    item.addEventListener('click', toggleContent)
  });