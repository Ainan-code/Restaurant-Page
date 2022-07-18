const About = () => {
   const container = document.createElement("div");
   
   
   const abouttUs = document.createElement("h2");
   abouttUs.textContent = "US";

   const aboutInfo = document.createElement("p");
   aboutInfo.textContent = "hfdhf hfbsjfhsahfueufcnjxbfsjbfjsafsjaafsjbfjafbsjfbsbfsjfbjsfbjsbfsfsfbsfbsbfsbfsbfjsbfsbfjssbf"


  const contactUs = document.createElement("h2");
  contactUs.textContent = "Contact Us";
  
  const contactInfo = document.createElement("div");

  contactInfo.textContent = "Adress: two streets one way Email: fake@gamail.com"

  abouttUs.appendChild(aboutInfo);
  contactUs.appendChild(contactInfo);

  container.append(abouttUs, contactUs);

  container.setAttribute("id", "about");

  return container

}

export {About}