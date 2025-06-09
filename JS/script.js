import { createHeaderMobile } from "./header.js";
import { createHeaderWeb } from "./header.js";
import { dropDownMenu } from "./header.js";

import { createHome } from "./home.js";


const root = document.getElementById("root");
const headerContainer = document.getElementById("header-container");
const mainContainer = document.getElementById("main-container");

window.addEventListener("resize", verifyResolution);



verifyResolution();
mainContainer.appendChild(createHome());
const buttonMenu = document.querySelector(".btn-menu"); // con punto si es clase

buttonMenu.addEventListener("click", () => {
  if (!document.querySelector(".menu-mobile")) {
    const menu = dropDownMenu();
     
    root.appendChild(menu);
  }
});







function verifyResolution() {
  headerContainer.innerHTML = ""; // Limpia cualquier header anterior

  if (window.innerWidth <= 1024) {
    headerContainer.appendChild(createHeaderMobile());
  } else {
    headerContainer.appendChild(createHeaderWeb());
  }
}