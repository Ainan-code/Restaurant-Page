const About = () => {
   const container = document.createElement("div");
   
   
   const abouttUs = document.createElement("div");
   const heading1 = document.createElement("h2");
   heading1.textContent = "About Us";

   const aboutInfo = document.createElement("p");
   aboutInfo.innerText = `hfdhfhfbsjfhsahfueufcnjxbfsjbf
                          jsafsjaafsjbfjafbsjfbsbfs`


  const contactUs = document.createElement("div");
  const heading2 = document.createElement("h2");
  heading2.textContent = "Contact Us";
  
  const contactInfo = document.createElement("p");

  contactInfo.innerText = `Adress: two streets one way  
                           Email: fake@gmail.com`;

  abouttUs.append(heading1, aboutInfo );
  contactUs.append(heading2, contactInfo);

  container.append(abouttUs, contactUs);

  container.setAttribute("id", "about");

  return container

}

export {About}