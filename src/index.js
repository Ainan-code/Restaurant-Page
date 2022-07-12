import _ from 'lodash';
import'./style.css';
import { createHeadline, bgPic, someTxt} from './homepage';
import { menu } from './menu';
import { About } from './about';





const divContent = document.querySelector("#content");


divContent.appendChild(createHeadline());


divContent.appendChild(someTxt());


const tabs = document.querySelectorAll('[data-tab]');
const _content = document.getElementsByClassName('active');

const toggleContent = function () {
  
    if (!this.classList.contains("active")) {
    
        Array.from(_content).forEach( item => {
          item.classList.remove('active');
        });
        this.classList.add('active');
        
        let currentTab = this.getAttribute('data-tab');

      if(currentTab === "home") {
        divContent.appendChild(someTxt())
      }  

      if(currentTab === "menu") {
        divContent.appendChild(menu())
      } 

      if(currentTab === "about") {
        divContent.appendChild(About())
      } 


    }
};




Array.from(tabs).forEach( item => {
    item.addEventListener('click', toggleContent)
  });