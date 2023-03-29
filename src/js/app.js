import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

document.querySelector('.menu-collapse').addEventListener('click', function () {
    let menu = document.querySelector('.menu-h')

    menu.classList.toggle("open");
    let panel = document.querySelector('.menu-h ul');
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
});