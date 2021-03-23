const name = document.querySelector("input"), iniciar = document.getElementById("inicio"), welcome = document.getElementById("welcome");

const selection = document.getElementById("selection"), nameLabel = document.getElementById("nombre2"), btnBack = document.getElementById("regresar");
const btnBack2 = document.getElementById("regresar2");
const juegos = document.getElementById("videojuegos"), rubik = document.getElementById("rubik");

const resultados = document.getElementById("resultados");


const pregunta1juego = document.getElementById("pregunta1-juego"), pregunta2juego = document.getElementById("pregunta2-juego"),
      pregunta3juego = document.getElementById("pregunta3-juego"), pregunta4juego = document.getElementById("pregunta4-juego"), 
      pregunta5juego = document.getElementById("pregunta5-juego"), pregunta6juego = document.getElementById("pregunta6-juego"),
      pregunta7juego = document.getElementById("pregunta7-juego");

const option11game = document.getElementById("opcion11juego"), option12game = document.getElementById("opcion12juego"), option13game = document.getElementById("opcion13juego"),
      option21game = document.getElementById("opcion21juego"), option22game = document.getElementById("opcion22juego"), option23game = document.getElementById("opcion23juego"),
      option31game = document.getElementById("opcion31juego"), option32game = document.getElementById("opcion32juego"), option33game = document.getElementById("opcion33juego"),
      option41game = document.getElementById("opcion41juego"), option42game = document.getElementById("opcion42juego"), option43game = document.getElementById("opcion43juego"),
      option51game = document.getElementById("opcion51juego"), option52game = document.getElementById("opcion52juego"), option53game = document.getElementById("opcion53juego"),
      option61game = document.getElementById("opcion61juego"), option62game = document.getElementById("opcion62juego"), option63game = document.getElementById("opcion63juego"),
      option71game = document.getElementById("opcion71juego"), option72game = document.getElementById("opcion72juego"), option73game = document.getElementById("opcion73juego");


const pregunta1rubik = document.getElementById("pregunta1-rubik"), pregunta2rubik = document.getElementById("pregunta2-rubik"),
      pregunta3rubik = document.getElementById("pregunta3-rubik"), pregunta4rubik = document.getElementById("pregunta4-rubik"),
      pregunta5rubik = document.getElementById("pregunta5-rubik"), pregunta6rubik = document.getElementById("pregunta6-rubik"),
      pregunta7rubik = document.getElementById("pregunta7-rubik");

const option11rubik = document.getElementById("opcion11rubik"), option12rubik = document.getElementById("opcion12rubik"), option13rubik = document.getElementById("opcion13rubik"),
      option21rubik = document.getElementById("opcion21rubik"), option22rubik = document.getElementById("opcion22rubik"), option23rubik = document.getElementById("opcion23rubik"),
      option31rubik = document.getElementById("opcion31rubik"), option32rubik = document.getElementById("opcion32rubik"), option33rubik = document.getElementById("opcion33rubik"),
      option41rubik = document.getElementById("opcion41rubik"), option42rubik = document.getElementById("opcion42rubik"), option43rubik = document.getElementById("opcion43rubik"),
      option51rubik = document.getElementById("opcion51rubik"), option52rubik = document.getElementById("opcion52rubik"), option53rubik = document.getElementById("opcion53rubik"),
      option61rubik = document.getElementById("opcion61rubik"), option62rubik = document.getElementById("opcion62rubik"), option63rubik = document.getElementById("opcion63rubik"),
      option71rubik = document.getElementById("opcion71rubik"), option72rubik = document.getElementById("opcion72rubik"), option73rubik = document.getElementById("opcion73rubik");

let buenas = 0, contador = 0;

const rubikQuestions = [[pregunta1rubik, rubikCounter1], [pregunta2rubik, rubikCounter2], [pregunta3rubik, rubikCounter3], 
    [pregunta4rubik, rubikCounter4], [pregunta5rubik, rubikCounter5], [pregunta6rubik, rubikCounter6], [pregunta7rubik, rubikCounter7]]
const gameQuestions = [[pregunta1juego, gameCounter1], [pregunta2juego, gameCounter2], [pregunta3juego, gameCounter3], 
    [pregunta4juego, gameCounter4], [pregunta5juego, gameCounter5], [pregunta6juego, gameCounter6], [pregunta7juego, gameCounter7]]
let preguntasB;

iniciar.addEventListener("click", function () {
    inicio();
});
btnBack.addEventListener("click", function () {
    regresa();
});
btnBack2.addEventListener("click", function () {
    regresa2();
});

//Selection buttons
juegos.addEventListener("click", function () {
    videogames();
});
rubik.addEventListener("click", function () {
    rubiks();
});

function inicio(){
    if (name.value === "") {
        
    }else{
        iniciar.setAttribute("type", "button");
        welcome.classList.add("quit");
        selection.classList.remove("quit");
        nameLabel.innerHTML = "Hola " + name.value + ", selecciona la categoria que quieras jugar:";
    }
}
function regresa(){
    iniciar.setAttribute("type", "submit");
    welcome.classList.remove("quit");
    selection.classList.add("quit");
}
function regresa2(){
    contador = 0;
    buenas = 0;
    selection.classList.remove("quit");
    resultados.classList.add("quit");
}


function shuffle(arr) {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};


function videogames(){
    selection.classList.add("quit");
    preguntasB = shuffle(gameQuestions);
    resetCounter(gameQuestions)
    preguntasB[0][0].classList.remove("quit");
    preguntasB[0][1]();
}
function rubiks(){
    selection.classList.add("quit");
    preguntasB = shuffle(rubikQuestions);
    resetCounter(rubikQuestions)
    preguntasB[0][0].classList.remove("quit");
    preguntasB[0][1]();
}

function resetCounter(counters){
    for(let i=0 ; i<counters.length ; i++){
        counters[i][0].children[0].children[1].innerHTML = "31";
    }
}


function showQuestion(){
    preguntasB[contador][0].classList.remove("quit");
    preguntasB[contador][1]();
}

function optionBad() {
    preguntasB[contador][0].classList.add("quit"); 
    if (contador!=4) {
        contador++; 
        showQuestion();        
    }else{
        results();
    }
}
function optionGood() {
    preguntasB[contador][0].classList.add("quit"); 
    if (contador!=4) {
        contador++;
        buenas++; 
        showQuestion();        
    }else{
        buenas++;
        results();
    }
}


const optionsBadGame = [option11game, option12game, option22game, option23game, option31game, option33game, 
    option41game, option43game, option51game, option52game, option61game, option62game, option72game, option73game]
for(let i=0 ; i<optionsBadGame.length ; i++){
    optionsBadGame[i].addEventListener("click", function () {
        optionBad();
    });
  }

const optionsGoodGame = [option13game, option21game, option32game, option42game, option53game, option63game, option71game]
for(let i=0 ; i<optionsGoodGame.length ; i++){
    optionsGoodGame[i].addEventListener("click", function () {
        optionGood();
    });
  }


const optionsBadRubik = [option11rubik, option12rubik, option21rubik, option23rubik, option32rubik, option33rubik, 
    option41rubik, option42rubik, option51rubik, option53rubik, option61rubik, option62rubik, option71rubik, option73rubik]
for(let i=0 ; i<optionsBadRubik.length ; i++){
    optionsBadRubik[i].addEventListener("click", function () {
        optionBad();
    });
  }

const optionsGoodRubik = [option13rubik, option22rubik, option31rubik, option43rubik, option52rubik, option63rubik, option72rubik]
for(let i=0 ; i<optionsGoodRubik.length ; i++){
    optionsGoodRubik[i].addEventListener("click", function () {
        optionGood();
    });
  }


function Counter(count, func, question){
    if (question.classList.contains("quit")) {
        
    }else if (count.innerHTML === "0"){
        preguntasB[contador][0].classList.add("quit");
        if (contador!=4) {
            contador++; 
            showQuestion();
        }else{
            results();
        }
    }else{
        let cuenta = parseInt(count.innerHTML) - 1;
        count.innerHTML = cuenta;
        setTimeout(func, 1E3)
    }
}

function gameCounter1(){
    const count = pregunta1juego.children[0].children[1];
    Counter(count, gameCounter1, pregunta1juego)
}
function gameCounter2(){
    const count = pregunta2juego.children[0].children[1];
    Counter(count, gameCounter2, pregunta2juego)
}
function gameCounter3(){
    const count = pregunta3juego.children[0].children[1];
    Counter(count, gameCounter3, pregunta3juego)
}
function gameCounter4(){
    const count = pregunta4juego.children[0].children[1];
    Counter(count, gameCounter4, pregunta4juego)
}
function gameCounter5(){
    const count = pregunta5juego.children[0].children[1];
    Counter(count, gameCounter5, pregunta5juego)
}
function gameCounter6(){
    const count = pregunta6juego.children[0].children[1];
    Counter(count, gameCounter6, pregunta6juego)
}
function gameCounter7(){
    const count = pregunta7juego.children[0].children[1];
    Counter(count, gameCounter7, pregunta7juego)
}

function rubikCounter1(){
    const count = pregunta1rubik.children[0].children[1];
    Counter(count, rubikCounter1, pregunta1rubik)
}
function rubikCounter2(){
    const count = pregunta2rubik.children[0].children[1];
    Counter(count, rubikCounter2, pregunta2rubik)
}
function rubikCounter3(){
    const count = pregunta3rubik.children[0].children[1];
    Counter(count, rubikCounter3, pregunta3rubik)
}
function rubikCounter4(){
    const count = pregunta4rubik.children[0].children[1];
    Counter(count, rubikCounter4, pregunta4rubik)
}
function rubikCounter5(){
    const count = pregunta5rubik.children[0].children[1];
    Counter(count, rubikCounter5, pregunta5rubik)
}
function rubikCounter6(){
    const count = pregunta6rubik.children[0].children[1];
    Counter(count, rubikCounter6, pregunta6rubik)
}
function rubikCounter7(){
    const count = pregunta7rubik.children[0].children[1];
    Counter(count, rubikCounter7, pregunta7rubik)
}

function results(){
    resultados.classList.remove("quit");
    if (buenas>=3) {
        resultados.children[3].classList.remove("quit");
        resultados.children[4].classList.remove("quit");
        resultados.children[0].innerHTML = "Felicidades "+ name.value +" has obtenido ";
    }else{
        resultados.children[3].classList.add("quit");
        resultados.children[4].classList.add("quit");
        resultados.children[0].innerHTML = "Lástima "+ name.value +", has obtenido solo";
    }
    resultados.children[1].innerHTML = buenas + " de 5";
}