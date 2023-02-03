/*---- Boton de Temas ----*/

const div = document.createElement("div");
let theme = 1;

div.appendChild(document.createTextNode("Cambiar Tema"));
div.setAttribute("id", "boton");

if (screen.width < 451) {
    div.setAttribute("style", "font-size:3vw ; width:55px ; height:30px ; background-color:#4B4B4D ; position:fixed ; left:20px ; bottom:15px ; color:white ; text-align: center ; border-radius:5px ; box-shadow:3px 3px 10px #4B4B4D ;");
}
else {
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
    else {
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

/*---- JSON Informacion Personal ----*/

const infoPersonal = '{"dateBorn":"21/09/1995", "nation":"Argentina", "actualCity":"Mar del Plata", "contact":"2236960717", "mail":"tacho_95@hotmail.com"}';
const objInfoPersonal = JSON.parse(infoPersonal);

document.getElementById("dateBorn").innerHTML = objInfoPersonal.dateBorn;
document.getElementById("nation").innerHTML = objInfoPersonal.nation;
document.getElementById("actualCity").innerHTML = objInfoPersonal.actualCity;
document.getElementById("contact").innerHTML = objInfoPersonal.contact + "<br>" + objInfoPersonal.mail;

/* ---- LocalStorage de JSON, recuperacion y manipulacion del mismo  ----*/

const abilities = {"0":"Paquete Oﬃce", "1":"Instalación y configuración de redes", "2":"Conocimientos de hardware informatico", "3":"HTML, CSS Responsive y JavaScript", "4":"Git y GitHub", "5":"PhotoShop y CorelDRAW"};

localStorage.setItem("abilitiesJSON", JSON.stringify(abilities));

const abilitiesLS = localStorage.getItem("abilitiesJSON");

const abilitiesParse = JSON.parse(abilitiesLS);

const liClassName = document.getElementsByClassName("li");

for (let i = 0; i < liClassName.length; i++){
    liClassName[i].innerHTML = abilitiesParse[i];
};