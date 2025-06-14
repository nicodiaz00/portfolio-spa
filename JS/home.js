function createDiv(){
    const div = document.createElement("div");

    return div;

}



export function createHome(){
    const home = createDiv();
    const leftDiv = createDiv();
    const rightDiv = createDiv();
    const divWelcome = createDiv();
    const divName = createDiv();
    const divSocialMedia = createDiv();
    

    home.classList.add("home-div");
    leftDiv.classList.add("left-div-home");
    rightDiv.classList.add("right-div-home");
    divWelcome.classList.add("div-welcome");
    divName.classList.add("div-name");
    divSocialMedia.classList.add("div-social-media")
    

    const h2 = document.createElement("h2")
    h2.textContent ="BIENVENIDO.";
    
    const h3 = document.createElement("h3");
    h3.textContent = "SOY,";
    const h1 = document.createElement("h1");
    h1.textContent = "NICOLAS DIAZ"; 

    divWelcome.appendChild(h2);
    divWelcome.appendChild(h3);
    divWelcome.appendChild(h1);

    const h2student = document.createElement("h2");
    h2student.textContent ="Estudiante Analista Programador";
    const h2developer = document.createElement("h2");
    h2developer.textContent = "Desarrollador .NET";

    divName.appendChild(h2student);
    divName.appendChild(h2developer);

    
    const linkedin = document.createElement("img")
    linkedin.src="IMAGES/linkedin.png";
    const alinkedin = document.createElement("a");
    alinkedin.href="https://www.linkedin.com/in/nicodiaz00/";
    alinkedin.target = "_blank";

    
    
    const aGitHub = document.createElement("a");
    aGitHub.href = "https://github.com/nicodiaz00";
    aGitHub.target = "_blank";
    
    const gitHub = document.createElement("img");
    gitHub.src = "IMAGES/github.png";
    
    alinkedin.appendChild(linkedin);
    aGitHub.appendChild(gitHub);
    


    divSocialMedia.appendChild(alinkedin);
    divSocialMedia.appendChild(aGitHub);

    leftDiv.appendChild(divWelcome);
    leftDiv.appendChild(divName);
    leftDiv.appendChild(divSocialMedia);


    home.appendChild(leftDiv);
    home.appendChild(rightDiv);

    return home;

}
export function createHomeMobile(){
    const home = createDiv();
    const topDiv = createDiv();
    const bottomDiv = createDiv();
    const divTittle = createDiv();
    const divProfilePicture = createDiv();
    /*
    const socialmediaDiv =createDiv();
    */
    home.classList.add("home-mobile-div");
    topDiv.classList.add("home-mobile-top");
    bottomDiv.classList.add("home-mobile-bottom");
    divTittle.classList.add("div-tittle-mobile");
    divProfilePicture.classList.add("div-profile-picture")

    const h2Tittle = document.createElement("h2");
    const h2Name = document.createElement("h2");
    const h3TittleStudy = document.createElement("h3");
    h2Tittle.textContent ="BIENVENIDO.";
    h2Name.textContent = "Soy NICOLAS DIAZ";
    h3TittleStudy.textContent = "Estudiante Analista Programador";

    divTittle.appendChild(h2Tittle);
    divTittle.appendChild(h2Name);
    divTittle.appendChild(h3TittleStudy);

    const profilePicture = document.createElement("img");
    profilePicture.src ="IMAGES/perfil-placeholder.jpg";

    divProfilePicture.appendChild(profilePicture);

    const linkedin = document.createElement("img")
    linkedin.src="IMAGES/linkedin.png";
    const alinkedin = document.createElement("a");
    alinkedin.href="https://www.linkedin.com/in/nicodiaz00/";
    alinkedin.target = "_blank";

    const aGitHub = document.createElement("a");
    aGitHub.href = "https://github.com/nicodiaz00";
    aGitHub.target = "_blank";
    
    const gitHub = document.createElement("img");
    gitHub.src = "IMAGES/github.png";
    
    alinkedin.appendChild(linkedin);
    aGitHub.appendChild(gitHub);

    topDiv.appendChild(divTittle);
    topDiv.appendChild(divProfilePicture);
    bottomDiv.appendChild(alinkedin);
    bottomDiv.appendChild(aGitHub);

    home.appendChild(topDiv);
    home.appendChild(bottomDiv);
    
    return home;
}
