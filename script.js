const div = document.createElement("div");
let theme = 1;

div.appendChild(document.createTextNode("Cambiar Tema"));
div.setAttribute("id", "boton");

if(screen.width < 451){
div.setAttribute("style", "font-size:3vw ; width:55px ; height:30px ; background-color:#4B4B4D ; position:fixed ; left:20px ; bottom:15px ; color:white ; text-align: center ; border-radius:5px ; box-shadow:3px 3px 10px #4B4B4D ;");
}
else{
    div.setAttribute("style", "width:65px ; height:45px ; background-color:#4B4B4D ; position:fixed ; right:15px ; bottom:15px ; color:white ; text-align: center ; border-radius:5px ; box-shadow:3px 3px 10px #4B4B4D ;");
};

div.addEventListener("click", function () {
    if (theme === 1) {
        document.getElementById("photo").setAttribute("src", "./media/photo2.png");
        const themeTopClass = document.getElementsByClassName("theme-top");
        for (let i = 0; i < themeTopClass.length; i++) {
            themeTopClass[i].setAttribute("style", "background-color:#8e8f0b ;");
        };
        const themeClass = document.getElementsByClassName("theme");
        for (let i = 0; i < themeClass.length; i++) {
            themeClass[i].setAttribute("style", "background-color:#b3b67e ;");
        };
        theme = 2;
    }
    else{
        document.getElementById("photo").setAttribute("src", "./media/photo1.png");
        const themeTopClass = document.getElementsByClassName("theme-top");
        for (let i = 0; i < themeTopClass.length; i++) {
            themeTopClass[i].setAttribute("style", "background-color:#f28938 ;");
        }
        const themeClass = document.getElementsByClassName("theme");
        for (let i = 0; i < themeClass.length; i++) {
            themeClass[i].setAttribute("style", "background-color:#f5ab73 ;");
        }
        theme = 1;
    }
});

document.body.appendChild(div);

