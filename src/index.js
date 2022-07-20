import _ from 'lodash';
import'./style.css';
import { createNavbar,  someTxt} from './homepage';
import { menu } from './menu';
import { About } from './about';





const divContent = document.querySelector("#content");

const layout = (() => { 

  const header = document.createElement('div');

  const mainContent = document.createElement('div')
  
  const footer = document.createElement('div');
  footer.classList.add("footer")
  
  footer.innerText = "Made by Ainan@copyright2022   Photo by Joseph Gonzalez"
  
  header.appendChild(createNavbar());
  return {
    header, mainContent, footer
  }
  

})();

  

divContent.append(layout.header, layout.mainContent, layout.footer);



window.onload = () => {
 layout.mainContent.appendChild(someTxt());
};









const tabs = document.querySelectorAll('[data-tab]');


const toggleContent = function () {
  
    
        
    let currentTab = this.getAttribute('data-tab');

      if(currentTab === "home") {
       layout.mainContent.replaceChildren()
       layout.mainContent.appendChild(someTxt());
        

        
      }  

      if(currentTab === "menu") {
       
        layout.mainContent.replaceChildren()
        layout.mainContent.appendChild(menu());

       
      } 

      if(currentTab === "about") {
        layout.mainContent.replaceChildren()
        layout.mainContent.appendChild(About());
      
      } 
      } 


    





Array.from(tabs).forEach( item => {
    item.addEventListener('click', toggleContent)
  });