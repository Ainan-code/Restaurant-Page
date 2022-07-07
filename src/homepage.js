import Resto from './restobg.jpg';

   
  const createHeadline = () => { 
    const nav = document.createElement("div");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    a1.textContent = "HOME";
    a2.textContent = "MENU";
    a3.textContent = "ABOUT";
   nav.classList.add("heading");
   li1.appendChild(a1);
   li2.appendChild(a2);
   li3.appendChild(a3);
   ul.append(li1, li2, li3);
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
    
    containerDiv.appendChild(aboutheader);
    containerDiv.appendChild(p);
    return containerDiv
  }
  




export  { createHeadline,  someTxt};