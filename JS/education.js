function createDiv(){
    const div = document.createElement("div");

    return div;

}

export function createEducationSection(){
    const mainDiv = createDiv();
    const topEducation = createDiv();
    const bottomEducation = createDiv();
    const imgContainer = createDiv();
    const tittleContainer = createDiv();
    
    const divInfo = createDiv();




    mainDiv.classList.add("education-div");

    topEducation.classList.add("div-top-education");
    bottomEducation.classList.add("div-bottom-education");

    imgContainer.classList.add("img-container");
    tittleContainer.classList.add("tittle-container");

    divInfo.classList.add("div-info");

    const img = document.createElement("img");
    img.src = "IMAGES/education.svg";
    imgContainer.appendChild(img);

    const h2Tittle = document.createElement("h2");
    h2Tittle.textContent = "FORMACION ACADEMICA";

    tittleContainer.appendChild(h2Tittle);

    divInfo.appendChild(imgContainer);
    divInfo.appendChild(tittleContainer);
    
    topEducation.appendChild(divInfo)

    mainDiv.appendChild(topEducation);
    mainDiv.appendChild(bottomEducation);

    return mainDiv;

    
}