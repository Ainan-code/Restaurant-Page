const menu = () => {
   const container = document.createElement("div");
   container.classList.add("menu-container");
   container.setAttribute("id", "menu");
   
   const menuItem1 = document.createElement("div");
   menuItem1.classList.add("menu-item1")
   const title1 = document.createElement("h5");
   const p1 = document.createElement("p");
   
   
   title1.textContent = "Tartuna box"
   p1.textContent = `lorem ipsum bsfj doesnt matter what the content is 
    25$`
    menuItem1.append(title1, p1);

   const menuItem2 = document.createElement("div");
   menuItem2.classList.add("menu-item2");
   const title2 = document.createElement("h5");
   const p2 = document.createElement("p");

   title2.textContent = "Injero box"
   p2.textContent = `lorem ipsum bsfj doesnt matter what the content is 
    35$`;
    menuItem2.append(title2, p2);

    const menuItem3 = document.createElement("div");
    menuItem1.classList.add("menu-item3");
    const title3 = document.createElement("h5");
    const p3 = document.createElement("p");
 
    title3.textContent = "Tartuna box"
    p3.textContent = `lorem ipsum bsfj doesnt matter what the content is 
     25$`;
     menuItem1.append(title3, p3);

     container.append(menuItem1, menuItem2, menuItem3);


     return container

}


   export {menu}