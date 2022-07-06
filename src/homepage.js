import Resto from './restobg.jpg';

   
  const createHeadline = () => { 
    const headline = document.createElement("h1");
  

   headline.classList.add("heading");
  headline.textContent = "East African Dishes";

  return headline
  }
  

 const bgPic = () => {
    const backgroundImg = new Image();
    backgroundImg.src = Resto;
    
    return backgroundImg
  }
  
 const someTxt = () => {
    const containerDiv = document.createElement("div"); 
    const p = document.createElement("p");
    p.textContent = ' This what your taste buds needs exactly , an exotic dish of balalabal'
    containerDiv.classList.add("div-text");
    containerDiv.appendChild(p)

    return containerDiv
  }
  




export  { createHeadline, bgPic, someTxt};