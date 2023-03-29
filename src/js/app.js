import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

document.querySelector('.menu-collapse').addEventListener('click', function () {
    document.querySelector('.menu-h').classList.toggle('open');
});