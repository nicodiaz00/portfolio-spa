
export function createHeaderMobile(){
    const header = createDiv()
    header.classList.add("headerContent")

    const divLeft = createDiv()
    divLeft.classList.add("div-left")
    const divRight = createDiv();
    divRight.classList.add("div-right");

    const link= document.createElement("a");
    link.href="#";
    link.textContent="[ND]";

    

    const img = createImage("IMAGES/menu-svgrepo-com.svg","imagebtn");

    const button = createButton("btn-menu",img);

    divLeft.appendChild(link);
    divRight.appendChild(button);

    header.appendChild(divLeft);
    header.appendChild(divRight);



    return header;

}

function createDiv(){
    const div = document.createElement("div");

    return div;

}

function createButton(styleCss,image,text, btnId){
    const btn = document.createElement("button");
    btn.id =btnId;
    btn.classList.add(styleCss);
    if(image){
        btn.appendChild(image);
    }else if(text){
        btn.textContent = text;
    }
    
    return btn;
}

function createImage(imgUrl,imgStyle){
    const image = document.createElement("img");
    image.classList.add(imgStyle);
    image.src = imgUrl;
    return image
}

export function createHeaderWeb(){
    const header = createDiv();
    header.classList.add("main-header")

    const divLeft= createDiv();
    divLeft.classList.add("main-div-left");

    const divRight = createDiv();
    divRight.classList.add("main-div-right");

    const btnTech = createButton("btnNav",null,"TECNOLOGIAS","btnTech");
    const btnEducation = createButton("btnNav",null,"FORMACIÓN","btnEducation");

    
    const btnProyect = createButton("btnNav",null,"PROYECTOS","btnProyect");
    const btnContact = createButton("btnNav",null,"CONTACTO","btnContact");



    divRight.appendChild(btnTech);
    divRight.appendChild(btnEducation);
    divRight.appendChild(btnProyect);
    divRight.appendChild(btnContact);

    header.appendChild(divLeft);
    header.appendChild(divRight);

    return header;

}

export function dropDownMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu-mobile");
    const btnTech = createButton("btnNav",null,"TECNOLOGIAS");
    const btnEducation = createButton("btnNav",null,"FORMACIÓN");
    const btnProyect = createButton("btnNav",null,"PROYECTOS");
    const btnContact = createButton("btnNav",null,"CONTACTO");
    const btnClose =createButton("btnclose",null,"X");
    btnClose.addEventListener("click",()=>{
    
    const child = document.querySelector(".menu-mobile");
    console.log("click en x");
    if(child){
        child.remove();
    }
})

    menu.appendChild(btnTech);
    menu.appendChild(btnEducation);
    menu.appendChild(btnProyect);
    menu.appendChild(btnContact);
    menu.appendChild(btnClose);
    return menu;

}