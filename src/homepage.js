

   
  const createNavbar = () => { 
    const nav = document.createElement("div");

    const ul = document.createElement("ul");

    const homeTab = document.createElement("li");
    const menuTab = document.createElement("li");
    const aboutTab = document.createElement("li");

    homeTab.textContent = "HOME";
   menuTab.textContent = "MENU";
    aboutTab.textContent = "ABOUT";

   nav.classList.add("heading");
   homeTab.setAttribute("data-tab", "home");
   menuTab.setAttribute("data-tab", "menu");
   aboutTab.setAttribute("data-tab", "about");


   


 
   ul.append(homeTab, menuTab, aboutTab);
   nav.appendChild(ul)
  

  return nav
  }
  


  
 const someTxt = () => {
    const containerDiv = document.createElement("div");

    
    
    const aboutheader = document.createElement("h2");  
    const p = document.createElement("p");
    aboutheader.textContent = "Welcome To La NOCHA";
    p.textContent = ` This what your taste buds needs exactly  an exotic dish of balabal`
    
    containerDiv.classList.add("div-text");
    containerDiv.setAttribute("id", "home");
    
    containerDiv.appendChild(aboutheader);
    containerDiv.appendChild(p);
    return containerDiv
  }
  




export  { createNavbar,  someTxt};