import Resto from './restobg.jpg';

   
  const createHeadline = () => { 
    const nav = document.createElement("div");
    const ul = document.createElement("ul");
    const homeTab = document.createElement("li");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const menuTab = document.createElement("li");
    const aboutTab = document.createElement("li");

    a1.textContent = "HOME";
    a2.textContent = "MENU";
    a3.textContent = "ABOUT";

   nav.classList.add("heading");
   homeTab.setAttribute("data-tab", "home");
   menuTab.setAttribute("data-tab", "menu");
   aboutTab.setAttribute("data-tab", "about");

   homeTab.classList.add("active");
   


  homeTab.appendChild(a1);
  menuTab.appendChild(a2);
  aboutTab.appendChild(a3);
   ul.append(homeTab, menuTab, aboutTab);
   nav.appendChild(ul)
  

  return nav
  }
  


  
 const someTxt = () => {
    const containerDiv = document.createElement("div");
    const aboutheader = document.createElement("h2");  
    const p = document.createElement("p");
    aboutheader.textContent = "Welcome TO La Nocha";
    p.textContent = ` This what your taste buds needs exactly  an exotic dish of balabal`
    
    containerDiv.classList.add("div-text");
    containerDiv.setAttribute("id", "home");
    
    containerDiv.appendChild(aboutheader);
    containerDiv.appendChild(p);
    return containerDiv
  }
  




export  { createHeadline,  someTxt};