"use strict"

/*let telcBtn = document.getElementById("telc");
console.log(telcBtn);
let telcParant = document.getElementById("icon1");

const telcDiv = document.createElement("div");

const textNodeTelc = document.createTextNode("Telc deutsch B2 Zertifikat");
telcDiv.appendChild(textNodeTelc);

let toggle = true;


telcBtn.addEventListener('click', () =>{
   
if(toggle){    
telcParant.appendChild(telcDiv);
toggle = false;
} else {
    telcDiv.remove();
    toggle = true;
}
});

let javaBtn = document.getElementById("java");

let javaParant = document.getElementById("icon2");

const javaDiv = document.createElement("div");

const textNodejava = document.createTextNode("Java Advanced & OOP");
javaDiv.appendChild(textNodejava);

let toggle2 = true;


javaBtn.addEventListener('click', () =>{
   
if(toggle2){    
javaParant.appendChild(javaDiv);
toggle2 = false;
} else {
    javaDiv.remove();
    toggle2 = true;
}
});

let jsBtn = document.getElementById("js");
let jsParent = document.getElementById("icon3");
let jsDiv = document.createElement("div");
let textNodeJs =document.createTextNode("Java Script - ECMAScript - 5");
jsDiv.appendChild(textNodeJs);

let toggle3 = true;

jsBtn.addEventListener('click', ()=>{

    if(toggle3){
        jsParent.appendChild(jsDiv);
        toggle3 = false;
    }else {
        jsDiv.remove();
        toggle3 = true;
    }
});

let htmlBtn = document.getElementById("html");
let htmlParent = document.getElementById("icon4");
let htmlDiv = document.createElement("div");
let textNodeHtml = document.createTextNode("Hypertext Markup Language 5");
htmlDiv.appendChild(textNodeHtml);
let toggle4 = true;

htmlBtn.addEventListener('click', ()=>{
    if(toggle4){
        htmlParent.appendChild(htmlDiv);
        toggle4 = false;
    } else {
        htmlDiv.remove();
        toggle4 = true;
    }
});

let cssBtn = document.getElementById("css");
let cssParent = document.getElementById("icon5");
let cssDiv = document.createElement("div");
let textNodeCss = document.createTextNode("Cascading Style Sheets 3");
cssDiv.appendChild(textNodeCss);
let toggle5 = true;

cssBtn.addEventListener('click', ()=>{
    if(toggle5){
        cssParent.appendChild(cssDiv);
        toggle5 = false;
    } else {
        cssDiv.remove();
        toggle5 = true; 
    }
});

let githubBtn = document.getElementById("github");
let githubParent = document.getElementById("icon6");
let githubDiv = document.createElement("div");
let githubTextNode = document.createTextNode("Github Kenntnisse");
githubDiv.appendChild(githubTextNode);
let toggle6 = true;

githubBtn.addEventListener('click', ()=>{
    if(toggle6) {
        githubParent.appendChild(githubDiv);
        toggle6 = false;
    } else {
        githubDiv.remove();
        toggle6 = true;
    }
});

let gitBtn = document.getElementById("git");
let gitParent = document.getElementById("icon7");
let gitDiv = document.createElement("div");
let gitTextNode = document.createTextNode("wichtigste Git Kommandos");
gitDiv.appendChild(gitTextNode);
let toggle7 = true;

gitBtn.addEventListener('click', ()=>{
    if(toggle7){
        gitParent.appendChild(gitDiv);
        toggle7 = false;
    } else {
        gitDiv.remove();
        toggle7 = true;
    }
});

let springBtn = document.getElementById("spring");
let springParent = document.getElementById("icon8");
let springDiv = document.createElement("div");
let springTextNode = document.createTextNode("Spring Framework");

springParent.style.position = "relative";
springDiv.style.position = "absolute";
springDiv.style.left = "50%";
springDiv.style.transform = "translateX(-50%)";
springDiv.style.top = "50px";
springDiv.style.opacity = "0";

springDiv.appendChild(springTextNode);
let toggle8 = true;

springBtn.addEventListener('click', () => {
    if (toggle8) {
        // Удаляем класс для предыдущей анимации (если он был добавлен ранее)
        springDiv.classList.remove("fade-out");

        // Задержка перед добавлением класса для анимации при появлении
        setTimeout(() => {
            springDiv.classList.add("fade-in");
        }, 50);

        // Устанавливаем нулевую прозрачность перед добавлением элемента в DOM
        springDiv.style.opacity = "0";

        // Добавляем элемент в родительский контейнер
        springParent.appendChild(springDiv);

        // Задержка перед установкой полной прозрачности (например, для плавного появления)
        setTimeout(() => {
            springDiv.style.opacity = "1";
        }, 100);

        toggle8 = false;
    } else {
        // Удаляем класс для предыдущей анимации (если он был добавлен ранее)
        springDiv.classList.remove("fade-in");

        // Добавляем класс для анимации при исчезновении
        springDiv.classList.add("fade-out");

        // Устанавливаем полную прозрачность перед началом анимации исчезновения
        springDiv.style.opacity = "1";

        // Таймаут перед удалением элемента из DOM
        setTimeout(() => {
            springDiv.remove();
        }, 500); // Используем таймаут для того, чтобы дать время для анимации исчезновения

        toggle8 = true;
    }
});


let reactBtn = document.getElementById("react");
let reactParent = document.getElementById("icon15");
let reactDiv = document.createElement("div");
let reactTextNode =document.createTextNode("React");

reactParent.style.position = "relative"; // Изменено на "relative"
reactDiv.style.position = "absolute";
reactDiv.style.left = "50%";
reactDiv.style.transform = "translateX(-50%)";
reactDiv.style.top = "50px"; // Измените это значение по вашему усмотрени

reactDiv.appendChild(reactTextNode);

let toggle15 = true;

reactBtn.addEventListener('click', ()=> {
    if(toggle15){
        reactParent.appendChild(reactDiv);
        toggle15 = false;
    } else {
        reactDiv.remove();
        toggle15 = true;
    }
}); */

document.querySelectorAll('a.btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
            const duration = 500;  // Измените это значение по своему усмотрению

            setTimeout(() => {
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }, duration);
        }
    });
});




