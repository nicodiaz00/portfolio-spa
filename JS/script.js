import { createHeaderMobile } from "./header.js";
import { createHeaderWeb } from "./header.js";
import { dropDownMenu } from "./header.js";

import { createHome } from "./home.js";
import { createHomeMobile } from "./home.js";


const root = document.getElementById("root");
const headerContainer = document.getElementById("header-container");
const mainContainer = document.getElementById("main-container");

window.addEventListener("resize", verifyResolution);


verifyResolution();


const buttonMenu = document.querySelector(".btn-menu"); // con punto si es clase

buttonMenu.addEventListener("click", () => {
  if (!document.querySelector(".menu-mobile")) {
    const menu = dropDownMenu();
     
    root.appendChild(menu);
  }
});







function verifyResolution() {
  headerContainer.innerHTML = ""; // Limpia cualquier header anterior
  mainContainer.innerHTML = "";
  if (window.innerWidth <= 1024) {
    headerContainer.appendChild(createHeaderMobile());
    mainContainer.appendChild(createHomeMobile());
  } else {
    headerContainer.appendChild(createHeaderWeb());
    mainContainer.appendChild(createHome());
  }
}