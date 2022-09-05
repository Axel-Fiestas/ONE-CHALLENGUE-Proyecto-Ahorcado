/*

**Requisitos:**
- Debe funcionar solo con letras mayúsculas;
- No deben ser utilizadas letras con acentos ni caracteres especiales;
- Al completar o dibujo de la horca, debe ser mostrado un mensaje "Fin del juego" en la pantalla;
- Si se completa la palabra correcta antes de que se acaben los intentos, debe ser mostrado un mensaje de "Ganaste, Felicidades!" en la pantalla.
- La página debe tener los guiones indicando cada letra da palabra, separados por un espacio;
- Para comenzar el juego la página debe tener un botón de "Iniciar Juego";
- No debe ser posible escribir números dentro del juego.
- Las letras equivocadas deben aparecer en la pantalla, pero no pueden aparecer de forma repetida;
- Las letras correctas deben aparecer en la pantalla encima de los guiones, en la posición correcta em relación a la palabra.

**Extras:**
- La página debe tener un campo para inserción de texto con la finalidad de adicionar nuevas palabras al juego, e un botón "Agregar palabra". 


*/
var generateNumberInRange=(min,max)=>{
    let number=Math.random()*(max-min)+min;
    number=Math.floor(number);
    return number;
}
var chooseWord=()=>{
    let limitArray=(wordsArray.length)-1;
    let position=generateNumberInRange(0,limitArray);
    return wordsArray[position];
}
var showGuions=()=>{ //Mostrar guíones
    //Con fuerza bruta
    pincel2.strokeStyle = "#0A3871";
    pincel2.fillStyle="#0A3871";
    pincel2.lineWidth = 4;

    for(let i=0;i<chosenWord.length;i++){
        pincel2.fillRect(((600*i)/chosenWord.length)+(1*i),0,(600/chosenWord.length)-25,5);
    }

    //Con divide && conquer
    //first=0
    //middle=Math.floor(word.length/2); //mitad
    //end=(word.length);
//
    //left_part=word.slice(0,middle);
    //right_part=word.slice(middle,end);
    //
    //console.log(left_part);
    //console.log(right_part);
//
    //i=0;
    //j=0;
//
    //while(i<left_part.length && j<right_part.length){
    //    
    //    if(left_part[i]!=null){
    //        console.log("_")
    //        i++;
    //    }
    //    if(right_part[j]!=null){
    //        console.log("_")
    //        j++;
    //    }
    //}
//
    //while(i<left_part.length){
    //    if(left_part[i]!=null){
    //        console.log("_");
    //        i++;
    //    }
    //}
//
    //while(j<right_part.length){
    //    if(right_part[j]!=null){
    //        console.log("_")
    //        j++;
    //    }
    //}
//
}

var receiveWord=()=>{
    let word=document.getElementById("madeWord").value;
    return String(word);
}

var addWord=()=>{
    let word=receiveWord();
    wordsArray.push(word);
}

var drawHanged=()=>{

    pincel.strokeStyle = "#0A3871";
    pincel.fillStyle="#0A3871";
    pincel.lineWidth = 4;

    switch(hangmanFlag){
        case 1:
        //LÍNEA DE ABAJO (1ero)
        pincel.fillRect(140,380,294,5);
        break;
        case 2:
        //LÍNEA DE MEDIO (2do)
        pincel.fillRect(190,20,5,360);
        break;
        case 3:
        //LÍNEA DE ARRRIBA (3cero)
        pincel.fillRect(190,20,177,4);
        break;
        case 4:
        //CUERDA (4ta)
        pincel.fillRect(367,20,4,50);
        break;
        case 5:
        //Cabeza (5to)
        pincel.fillStyle="#0A3871";
        pincel.beginPath();
        pincel.arc(365,110,40,0,2*3.14)
        pincel.stroke();
        break;
        case 6:
        //Brazo Izquierdo(6to)
        pincel.beginPath();
        pincel.moveTo(365, 150);
        pincel.lineTo(330, 220);
        pincel.stroke();
        break;
        case 7:
        //Brazo Derecho(7to)
        pincel.beginPath();
        pincel.moveTo(370, 150);
        pincel.lineTo(405, 220);
        pincel.stroke();
        break;
        case 8:
        //Cuerpo(8to)
        pincel.fillRect(365,150,4,120);
        break;
        case 9:
            //Pierna izquierda(9no)
        pincel.beginPath();
        pincel.moveTo(367, 270);
        pincel.lineTo(330, 350);
        pincel.stroke();
        break;
        case 10:
         //Pierna derecha(10mo):
        pincel.beginPath();
        pincel.moveTo(367, 270);
        pincel.lineTo(405, 350);
        pincel.stroke();
        break;

    }
}

var clearHangmanDraw=()=>{
    hangmanFlag=0;
    pincel.clearRect(0, 0, 600, 400);
}

var drawPartOfHangman=()=>{
    hangmanFlag+=1;
    drawHanged();
}

/*disappear and appear Functions*/
var disappearStartPart=()=>{
    document.getElementById("start").style.display="none";
}

var appearStartPart=()=>{
    document.getElementById("start").style.display="flex";
}

var disappearWritePart=()=>{
    document.getElementById("write").style.display="none";
}

var appearWritePart=()=>{
    document.getElementById("write").style.display="flex";
}

var disappearGamePart=()=>{
    document.getElementById("game").style.display="none";
}

var appearGamePart=()=>{
    document.getElementById("game").style.display="flex";
}

/*button on click functions*/

var saveAndPlay=()=>{
    addWord();
    playGame();
}

var playGame=()=>{
    disappearStartPart();
    disappearWritePart();
    appearGamePart();
    chosenWord=chooseWord();
    showGuions();
}

var cancel=()=>{
    disappearWritePart();
    appearStartPart();
}

var writeYourWord=()=>{
    disappearStartPart();
    appearWritePart();
}


var hangmanFlag=0;
var wordsArray=["Java","Html","Vue","Cmas","Javascri","Python","Programa"];
var chosenWord=toString;

var pantalla=document.querySelector(".hangman-draw");
var pincel= pantalla.getContext("2d");

var silaba=document.querySelector(".lines-of-words");
var pincel2=silaba.getContext("2d");









//showGuions();

