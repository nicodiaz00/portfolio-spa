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
    const divlinkedin = createDiv();
    const divGitHub = createDiv();

    home.classList.add("home-div");
    leftDiv.classList.add("left-div-home");
    rightDiv.classList.add("right-div-home");
    divWelcome.classList.add("div-welcome");
    divName.classList.add("div-name");
    divSocialMedia.classList.add("div-social-media")
    divlinkedin.classList.add("div-linkedin");
    divGitHub.classList.add("div-git-hub");

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

    
    const linkedin =document.createElement("img")
    linkedin.src="IMAGES/linkedin.png";

    divlinkedin.appendChild(linkedin);

    const gitHub = document.createElement("img");
    gitHub.src = "IMAGES/github.png";

    divGitHub.appendChild(gitHub);


    divSocialMedia.appendChild(divlinkedin);
    divSocialMedia.appendChild(divGitHub);

    leftDiv.appendChild(divWelcome);
    leftDiv.appendChild(divName);
    leftDiv.appendChild(divSocialMedia);


    home.appendChild(leftDiv);
    home.appendChild(rightDiv);

    return home;
 

}
