import { createHeaderMobile } from "./header.js";
import { createHeaderWeb } from "./header.js";

const root = document.getElementById("root");

window.addEventListener("resize",verifyResolution);

verifyResolution();


function verifyResolution(){
    const firstChild= root.children[0];
    const width = window.innerWidth;
    
    if (
        firstChild &&
        (firstChild.classList.contains("headerContent") || firstChild.classList.contains("main-header"))
    ) {
         root.removeChild(firstChild);
    }
    
    if(width <= 800){
        const headerM = createHeaderMobile();
        root.appendChild(headerM);

    }else{
        const headerW = createHeaderWeb();
        root.appendChild(headerW);
    }
}