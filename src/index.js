import "./style.css";
import { loadPage } from "./pageload";
import { displayMenu } from "./menu";
import { displayLinks } from "./aboutus";

loadPage();
const buttons = document.querySelectorAll("body>header>nav>button");

buttons.forEach(element => {
    element.addEventListener("click", () => {
        let tabtext = element.textContent;

        switch (tabtext){
            case "Home":
                loadPage();
                break;
            case "Menu":
                displayMenu();
                console.log("test");
                break;
            case "About":
                displayLinks();
                break;
        }

    })
});


