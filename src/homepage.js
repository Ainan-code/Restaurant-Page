import Resto from './restobg.jpg';

function home()  {
    let headline = document.createElement("h1");

    headline.classList.add("heading");
    headline.textContent = "East African Dishes";

    
  let awesomTxt = document.createElement("div");
    awesomTxt.setAttribute("id", "awesomeTxt");
    awesomTxt.textContent = " If you got a taste for rich flavour and  a taste for beautiful gourmet the you are at the right Place";

     let divContent = document.querySelector("#content");

     let resto = new Image();
      resto.src = Resto;



    divContent.append(headline);
    divContent.append(awesomTxt);
    divContent.append(resto);

  return divContent
  

}



export default home;