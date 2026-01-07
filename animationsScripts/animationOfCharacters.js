const char1 = document.querySelector("#sprite1 img");
const char2 = document.querySelector("#sprite2 img");

const continuosAnimationChar1 = setInterval(() => {
    if(char1.getAttribute("src") === "./img/playerChar.png"){
        char1.setAttribute("src", "./img/playerChar1.png");
        char2.setAttribute("src", "./img/computerChar.png");
    } else {
        char1.setAttribute("src", "./img/playerChar.png");
        char2.setAttribute("src", "./img/computerChar1.png");
    }
    
}, 700);