// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const link=document.querySelectorAll('p> a');
link.forEach(element => {
	element.style.color='#008fb9';
});
const titleTwo=document.querySelectorAll('h2');
titleTwo.forEach(element => {
	element.style.fontSize='1.5rem';
});
const parText=document.querySelectorAll('p');
parText.forEach(element => {
	element.style.fontSize='20px';
});
const titleVan=document.querySelectorAll('h1');
titleVan.forEach(element => {
	element.style.fontSize='50px';
});

