//Pantalla de Inicio
const nombre = document.querySelector("input");
const iniciar = document.getElementById("inicio");
const welcome = document.getElementById("welcome");
//Selección de Categoria
const selection = document.getElementById("selection");
const nombre2 = document.getElementById("nombre2");
const regresar = document.getElementById("regresar");
const regresar2 = document.getElementById("regresar2");
const juegos = document.getElementById("videojuegos");
const rubik = document.getElementById("rubik");

//Patalla Final
const resultados = document.getElementById("resultados");

//Preguntas de VideoJuegos
const pregunta1juego = document.getElementById("pregunta1-juego");
const pregunta2juego = document.getElementById("pregunta2-juego");
const pregunta3juego = document.getElementById("pregunta3-juego");
const pregunta4juego = document.getElementById("pregunta4-juego");
const pregunta5juego = document.getElementById("pregunta5-juego");
const pregunta6juego = document.getElementById("pregunta6-juego");
const pregunta7juego = document.getElementById("pregunta7-juego");

//Opciones VideoJuego
const opcion11juego = document.getElementById("opcion11juego");
const opcion12juego = document.getElementById("opcion12juego");
const opcion13juego = document.getElementById("opcion13juego");
const opcion21juego = document.getElementById("opcion21juego");
const opcion22juego = document.getElementById("opcion22juego");
const opcion23juego = document.getElementById("opcion23juego");
const opcion31juego = document.getElementById("opcion31juego");
const opcion32juego = document.getElementById("opcion32juego");
const opcion33juego = document.getElementById("opcion33juego");
const opcion41juego = document.getElementById("opcion41juego");
const opcion42juego = document.getElementById("opcion42juego");
const opcion43juego = document.getElementById("opcion43juego");
const opcion51juego = document.getElementById("opcion51juego");
const opcion52juego = document.getElementById("opcion52juego");
const opcion53juego = document.getElementById("opcion53juego");
const opcion61juego = document.getElementById("opcion61juego");
const opcion62juego = document.getElementById("opcion62juego");
const opcion63juego = document.getElementById("opcion63juego");
const opcion71juego = document.getElementById("opcion71juego");
const opcion72juego = document.getElementById("opcion72juego");
const opcion73juego = document.getElementById("opcion73juego");



//Preguntas Rubik
const pregunta1rubik = document.getElementById("pregunta1-rubik");
const pregunta2rubik = document.getElementById("pregunta2-rubik");
const pregunta3rubik = document.getElementById("pregunta3-rubik");
const pregunta4rubik = document.getElementById("pregunta4-rubik");
const pregunta5rubik = document.getElementById("pregunta5-rubik");
const pregunta6rubik = document.getElementById("pregunta6-rubik");
const pregunta7rubik = document.getElementById("pregunta7-rubik");

//Opciones Rubik
const opcion11rubik = document.getElementById("opcion11rubik");
const opcion12rubik = document.getElementById("opcion12rubik");
const opcion13rubik = document.getElementById("opcion13rubik");
const opcion21rubik = document.getElementById("opcion21rubik");
const opcion22rubik = document.getElementById("opcion22rubik");
const opcion23rubik = document.getElementById("opcion23rubik");
const opcion31rubik = document.getElementById("opcion31rubik");
const opcion32rubik = document.getElementById("opcion32rubik");
const opcion33rubik = document.getElementById("opcion33rubik");
const opcion41rubik = document.getElementById("opcion41rubik");
const opcion42rubik = document.getElementById("opcion42rubik");
const opcion43rubik = document.getElementById("opcion43rubik");
const opcion51rubik = document.getElementById("opcion51rubik");
const opcion52rubik = document.getElementById("opcion52rubik");
const opcion53rubik = document.getElementById("opcion53rubik");
const opcion61rubik = document.getElementById("opcion61rubik");
const opcion62rubik = document.getElementById("opcion62rubik");
const opcion63rubik = document.getElementById("opcion63rubik");
const opcion71rubik = document.getElementById("opcion71rubik");
const opcion72rubik = document.getElementById("opcion72rubik");
const opcion73rubik = document.getElementById("opcion73rubik");




//Botones Inicio
iniciar.addEventListener("click", function () {
    inicio();
});
regresar.addEventListener("click", function () {
    regresa();
});
regresar2.addEventListener("click", function () {
    regresa2();
});


//Botones de selección
juegos.addEventListener("click", function () {
    videojuegos();
});
rubik.addEventListener("click", function () {
    rubiks();
});


//Opciones Videojuegos
function opcionJuegoMala() {
    if (contador2!=4) {
        contador2++;
        elegirPregunta2(preguntasB2);
    }else{
        resultados.classList.remove("quit");
        resultado2();
    }
}
function opcionJuegoBuena() {
    if (contador2!=4) {
        contador2++;
        buenas2++;
        elegirPregunta2(preguntasB2);
    }else{
        buenas2++;
        resultados.classList.remove("quit");
        resultado2();
    }
}

opcion11juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion12juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion13juego.addEventListener("click", function () {
    opcionJuegoBuena();
});
opcion21juego.addEventListener("click", function () {
    opcionJuegoBuena();
});
opcion22juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion23juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion31juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion32juego.addEventListener("click", function () {
    opcionJuegoBuena();
});
opcion33juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion41juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion42juego.addEventListener("click", function () {
    opcionJuegoBuena();
});
opcion43juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion51juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion52juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion53juego.addEventListener("click", function () {
    opcionJuegoBuena();
});
opcion61juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion62juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion63juego.addEventListener("click", function () {
    opcionJuegoBuena();
});
opcion71juego.addEventListener("click", function () {
    opcionJuegoBuena();
});
opcion72juego.addEventListener("click", function () {
    opcionJuegoMala();
});
opcion73juego.addEventListener("click", function () {
    opcionJuegoMala();
});


//Opciones Rubik
function opcionRubikMala() {
    if (contador!=4) {
        contador++;
        elegirPregunta(preguntasB);
    }else{
        resultados.classList.remove("quit");
        resultado();
    }
}
function opcionRubikBuena() {
    if (contador!=4) {
        contador++;
        buenas++;
        elegirPregunta(preguntasB);
    }else{
        buenas++;
        resultados.classList.remove("quit");
        resultado();
    }
}


opcion11rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion12rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion13rubik.addEventListener("click", function () {
    opcionRubikBuena();
});
opcion21rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion22rubik.addEventListener("click", function () {
    opcionRubikBuena();
});
opcion23rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion31rubik.addEventListener("click", function () {
    opcionRubikBuena();
});
opcion32rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion33rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion41rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion42rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion43rubik.addEventListener("click", function () {
    opcionRubikBuena();
});
opcion51rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion52rubik.addEventListener("click", function () {
    opcionRubikBuena();
});
opcion53rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion61rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion62rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion63rubik.addEventListener("click", function () {
    opcionRubikBuena();
});
opcion71rubik.addEventListener("click", function () {
    opcionRubikMala();
});
opcion72rubik.addEventListener("click", function () {
    opcionRubikBuena();
});
opcion73rubik.addEventListener("click", function () {
    opcionRubikMala();
});




let valor = "";

function inicio(){
    if (nombre.value === "") {
        
    }else{
        valor = nombre.value;
        iniciar.setAttribute("type", "button");
        welcome.classList.add("quit");
        selection.classList.remove("quit");
        nombre2.innerHTML = "Hola " + valor + ", selecciona la categoria que quieras jugar:";
    }
}
function regresa(){
    welcome.classList.remove("quit");
    selection.classList.add("quit");
}
function regresa2(){
    contador = 0;
    buenas = 0;
    contador2 = 0;
    buenas2 = 0;
    selection.classList.remove("quit");
    resultados.classList.add("quit");
}


//Mezclar Arrays
function shuffle(arr) {
    let i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

//Banco de preguntas
let preguntas = [1, 2, 3, 4, 5, 6, 7]
let preguntasB;

let preguntas2 = [1, 2, 3, 4, 5, 6, 7]
let preguntasB2;

//Contador de respuestas buenas
let buenas = 0;
let contador = 0;

let buenas2 = 0;
let contador2 = 0;

//Funciones de selección de categoria
function videojuegos(){
    selection.classList.add("quit");
    preguntasB2 = shuffle(preguntas2);
    resetearCounter(pregunta1juego, pregunta2juego, pregunta3juego, pregunta4juego, pregunta5juego, pregunta6juego, pregunta7juego)
    elegirPregunta2(preguntasB2);
}
function rubiks(){
    selection.classList.add("quit");
    preguntasB = shuffle(preguntas);
    resetearCounter(pregunta1rubik, pregunta2rubik, pregunta3rubik, pregunta4rubik, pregunta5rubik, pregunta6rubik, pregunta7rubik)
    elegirPregunta(preguntasB);
}

//Resetear Contadores
function resetearCounter(pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7){
    pregunta1.children[0].children[1].innerHTML = "31";
    pregunta2.children[0].children[1].innerHTML = "31";
    pregunta3.children[0].children[1].innerHTML = "31";
    pregunta4.children[0].children[1].innerHTML = "31";
    pregunta5.children[0].children[1].innerHTML = "31";
    pregunta6.children[0].children[1].innerHTML = "31";
    pregunta7.children[0].children[1].innerHTML = "31";
}


//Elegir Pregunta Videojuegos
function elegirPregunta2(preguntasB2) {
    if (preguntasB2[contador2]===1) {
        pregunta2juego.classList.add("quit");
        pregunta3juego.classList.add("quit");
        pregunta4juego.classList.add("quit");
        pregunta5juego.classList.add("quit");
        pregunta6juego.classList.add("quit");
        pregunta7juego.classList.add("quit");
        pregunta1juego.classList.remove("quit");
        counter11();
    } else if (preguntasB2[contador2]===2) {
        pregunta1juego.classList.add("quit");
        pregunta3juego.classList.add("quit");
        pregunta4juego.classList.add("quit");
        pregunta5juego.classList.add("quit");
        pregunta6juego.classList.add("quit");
        pregunta7juego.classList.add("quit");
        pregunta2juego.classList.remove("quit");
        counter12();
    } else if (preguntasB2[contador2]===3) {
        pregunta1juego.classList.add("quit");
        pregunta2juego.classList.add("quit");
        pregunta4juego.classList.add("quit");
        pregunta5juego.classList.add("quit");
        pregunta6juego.classList.add("quit");
        pregunta7juego.classList.add("quit");
        pregunta3juego.classList.remove("quit");
        counter13();
    } else if (preguntasB2[contador2]===4) {
        pregunta2juego.classList.add("quit");
        pregunta3juego.classList.add("quit");
        pregunta1juego.classList.add("quit");
        pregunta5juego.classList.add("quit");
        pregunta6juego.classList.add("quit");
        pregunta7juego.classList.add("quit");
        pregunta4juego.classList.remove("quit");
        counter14();
    } else if (preguntasB2[contador2]===5) {
        pregunta2juego.classList.add("quit");
        pregunta3juego.classList.add("quit");
        pregunta4juego.classList.add("quit");
        pregunta1juego.classList.add("quit");
        pregunta6juego.classList.add("quit");
        pregunta7juego.classList.add("quit");
        pregunta5juego.classList.remove("quit");
        counter15();
    } else if (preguntasB2[contador2]===6) {
        pregunta2juego.classList.add("quit");
        pregunta3juego.classList.add("quit");
        pregunta4juego.classList.add("quit");
        pregunta5juego.classList.add("quit");
        pregunta1juego.classList.add("quit");
        pregunta7juego.classList.add("quit");
        pregunta6juego.classList.remove("quit");
        counter16();
    } else if (preguntasB2[contador2]===7) {
        pregunta2juego.classList.add("quit");
        pregunta3juego.classList.add("quit");
        pregunta4juego.classList.add("quit");
        pregunta5juego.classList.add("quit");
        pregunta6juego.classList.add("quit");
        pregunta1juego.classList.add("quit");
        pregunta7juego.classList.remove("quit");
        counter17();
    }
}
//Elegir Pregunta Rubik
function elegirPregunta(preguntasB) {
    if (preguntasB[contador]===1) {
        pregunta2rubik.classList.add("quit");
        pregunta3rubik.classList.add("quit");
        pregunta4rubik.classList.add("quit");
        pregunta5rubik.classList.add("quit");
        pregunta6rubik.classList.add("quit");
        pregunta7rubik.classList.add("quit");
        pregunta1rubik.classList.remove("quit");
        counter21();
    } else if (preguntasB[contador]===2) {
        pregunta1rubik.classList.add("quit");
        pregunta3rubik.classList.add("quit");
        pregunta4rubik.classList.add("quit");
        pregunta5rubik.classList.add("quit");
        pregunta6rubik.classList.add("quit");
        pregunta7rubik.classList.add("quit");
        pregunta2rubik.classList.remove("quit");
        counter22();
    } else if (preguntasB[contador]===3) {
        pregunta1rubik.classList.add("quit");
        pregunta2rubik.classList.add("quit");
        pregunta4rubik.classList.add("quit");
        pregunta5rubik.classList.add("quit");
        pregunta6rubik.classList.add("quit");
        pregunta7rubik.classList.add("quit");
        pregunta3rubik.classList.remove("quit");
        counter23();
    } else if (preguntasB[contador]===4) {
        pregunta2rubik.classList.add("quit");
        pregunta3rubik.classList.add("quit");
        pregunta1rubik.classList.add("quit");
        pregunta5rubik.classList.add("quit");
        pregunta6rubik.classList.add("quit");
        pregunta7rubik.classList.add("quit");
        pregunta4rubik.classList.remove("quit");
        counter24();
    } else if (preguntasB[contador]===5) {
        pregunta2rubik.classList.add("quit");
        pregunta3rubik.classList.add("quit");
        pregunta4rubik.classList.add("quit");
        pregunta1rubik.classList.add("quit");
        pregunta6rubik.classList.add("quit");
        pregunta7rubik.classList.add("quit");
        pregunta5rubik.classList.remove("quit");
        counter25();
    } else if (preguntasB[contador]===6) {
        pregunta2rubik.classList.add("quit");
        pregunta3rubik.classList.add("quit");
        pregunta4rubik.classList.add("quit");
        pregunta5rubik.classList.add("quit");
        pregunta1rubik.classList.add("quit");
        pregunta7rubik.classList.add("quit");
        pregunta6rubik.classList.remove("quit");
        counter26();
    } else if (preguntasB[contador]===7) {
        pregunta2rubik.classList.add("quit");
        pregunta3rubik.classList.add("quit");
        pregunta4rubik.classList.add("quit");
        pregunta5rubik.classList.add("quit");
        pregunta6rubik.classList.add("quit");
        pregunta1rubik.classList.add("quit");
        pregunta7rubik.classList.remove("quit");
        counter27();
    }
}


//Función Contador Videojuegos
function counter1(count, func, pregunta){
    if (pregunta.classList.contains("quit")) {
        
    }else if (count.innerHTML === "0"){
        if (contador2!=4) {
            contador2++;
            elegirPregunta2(preguntasB2);
        }else{
            resultados.classList.remove("quit");
            resultado2();
        }
    }else{
        let cuenta = parseInt(count.innerHTML) - 1;
        count.innerHTML = cuenta;
        setTimeout(func, 1E3)
    }
}

//Contadores de Videojuegos
function counter11(){
    const count = pregunta1juego.children[0].children[1]
    const preguntaa = pregunta1juego
    counter1(count, counter11, preguntaa)
}
function counter12(){
    const count = pregunta2juego.children[0].children[1]
    const preguntaa = pregunta2juego
    counter1(count, counter12, preguntaa)
}
function counter13(){
    const count = pregunta3juego.children[0].children[1]
    const preguntaa = pregunta3juego
    counter1(count, counter13, preguntaa)
}
function counter14(){
    const count = pregunta4juego.children[0].children[1]
    const preguntaa = pregunta4juego
    counter1(count, counter14, preguntaa)
}
function counter15(){
    const count = pregunta5juego.children[0].children[1]
    const preguntaa = pregunta5juego
    counter1(count, counter15, preguntaa)
}
function counter16(){
    const count = pregunta6juego.children[0].children[1]
    const preguntaa = pregunta6juego
    counter1(count, counter16, preguntaa)
}
function counter17(){
    const count = pregunta7juego.children[0].children[1]
    const preguntaa = pregunta7juego
    counter1(count, counter17, preguntaa)
}


//Función Contador Rubik
function counter2(count, func, pregunta){
    if (pregunta.classList.contains("quit")) {
        
    }else if (count.innerHTML === "0"){
        if (contador!=4) {
            contador++;
            elegirPregunta(preguntasB);
        }else{
            resultados.classList.remove("quit");
            resultado();
        }
    }else{
        let cuenta = parseInt(count.innerHTML) - 1;
        count.innerHTML = cuenta;
        setTimeout(func, 1E3)
    }
}

//Contadores de Rubik
function counter21(){
    const count = pregunta1rubik.children[0].children[1]
    const preguntaa = pregunta1rubik
    counter2(count, counter21, preguntaa)
}
function counter22(){
    const count = pregunta2rubik.children[0].children[1]
    const preguntaa = pregunta2rubik
    counter2(count, counter22, preguntaa)
}
function counter23(){
    const count = pregunta3rubik.children[0].children[1]
    const preguntaa = pregunta3rubik
    counter2(count, counter23, preguntaa)
}
function counter24(){
    const count = pregunta4rubik.children[0].children[1]
    const preguntaa = pregunta4rubik
    counter2(count, counter24, preguntaa)
}
function counter25(){
    const count = pregunta5rubik.children[0].children[1]
    const preguntaa = pregunta5rubik
    counter2(count, counter25, preguntaa)
}
function counter26(){
    const count = pregunta6rubik.children[0].children[1]
    const preguntaa = pregunta6rubik
    counter2(count, counter26, preguntaa)
}
function counter27(){
    const count = pregunta7rubik.children[0].children[1]
    const preguntaa = pregunta7rubik
    counter2(count, counter27, preguntaa)
}



//Resultados
function quitarPreguntas(){
    pregunta1juego.classList.add("quit");
    pregunta2juego.classList.add("quit");
    pregunta3juego.classList.add("quit");
    pregunta4juego.classList.add("quit");
    pregunta5juego.classList.add("quit");
    pregunta6juego.classList.add("quit");
    pregunta7juego.classList.add("quit");

    pregunta1rubik.classList.add("quit");
    pregunta2rubik.classList.add("quit");
    pregunta3rubik.classList.add("quit");
    pregunta4rubik.classList.add("quit");
    pregunta5rubik.classList.add("quit");
    pregunta6rubik.classList.add("quit");
    pregunta7rubik.classList.add("quit");    
}

//Resultado Videojuegos
function resultado2(){
    if (buenas2>=3) {
        quitarPreguntas();
        resultados.children[0].innerHTML = "Felicidades "+ valor +" has obtenido ";
        resultados.children[1].innerHTML = buenas2 + " de 5";
        resultados.children[2].innerHTML = "respuestas correctas.";
    }else{
        quitarPreguntas();
        resultados.children[3].classList.add("quit");
        resultados.children[4].classList.add("quit");
        resultados.children[0].innerHTML = "Lástima "+ valor +", has obtenido solo";
        resultados.children[1].innerHTML = buenas2 + " de 5";
        resultados.children[2].innerHTML = "respuestas correctas.";    
    }
}
//Resultado Rubik
function resultado(){
    if (buenas>=3) {
        quitarPreguntas();
        resultados.children[0].innerHTML = "Felicidades "+ valor +" has obtenido ";
        resultados.children[1].innerHTML = buenas + " de 5";
        resultados.children[2].innerHTML = "respuestas correctas.";
    }else{
        quitarPreguntas();
        resultados.children[3].classList.add("quit");
        resultados.children[4].classList.add("quit");
        resultados.children[0].innerHTML = "Lástima "+ valor +", has obtenido solo";
        resultados.children[1].innerHTML = buenas + " de 5";
        resultados.children[2].innerHTML = "respuestas correctas.";    
    }
}