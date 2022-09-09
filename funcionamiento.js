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
- Las letras correctas deben aparecer en la pantalla encima de los guiones, en la posición correcta en relación a la palabra.

**Extras:**
- La página debe tener un campo para inserción de texto con la finalidad de adicionar nuevas palabras al juego, e un botón "Agregar palabra". 
*/


function Verify(event){

    let letter=event.key.toUpperCase();
    console.log(letter);

    if(isALetter(letter)){

        if(checkLetterInSecretWord(letter))alert("NICE!");
        else{
            if(!checkRepeatedLetter(letter)){
                addWrongLetters(letter);
                showWrongWords(errorWords);
                drawPartOfHangman();
                drawLetter();
            }
        }
    }

}

const drawLetter=()=>{

    pincel3.font='bold 50pt Menlo';
    pincel3.fillStyle='#000000';

    for(let i=0;i<chosenWord.length;i++){

        pincel3.fillText("H",((600*i)/chosenWord.length)+(1*i),100);
    }
}

const checkRepeatedLetter=(letter)=>{

    if(errorWords.includes(letter)){
        return true;
    }else{
        return false;
    }
}

const showWrongWords=(arr)=>{
    let cadena="";
    for(let i=0;i<arr.length;i++){
        cadena+=" ";
        cadena+=arr[i];
    }

    document.getElementById("palabras-erroneas").innerHTML=cadena;
}

const addWrongLetters=letter=>{
    errorWords.push(letter);
}
const checkLetterInSecretWord=letter=>{
    for(let i=0;i<chosenWord.length;i++){
        if(letter==chosenWord[i])return true;
    }
    return false;
}
const isALetter= letter=> (/[a-zA-Z]/).test(letter);

const generateNumberInRange=(min,max)=>{
    let number=Math.random()*(max-min)+min;
    number=Math.floor(number);
    return number;
}
const chooseWord=()=>{
    let limitArray=(wordsArray.length)-1;
    let position=generateNumberInRange(0,limitArray);
    return wordsArray[position];
}
const showGuions=()=>{
    pincel2.strokeStyle = "#0A3871";
    pincel2.fillStyle="#0A3871";
    pincel2.lineWidth = 4;

    for(let i=0;i<chosenWord.length;i++){
        pincel2.fillRect(((600*i)/chosenWord.length)+(1*i),0,(600/chosenWord.length)-25,5);
    }
}
const clearGuions=()=>{
    pincel2.clearRect(0, 0, 600, 20);
}
const receiveWord=()=>{
    let word=document.getElementById("madeWord").value;
    return String(word);
}
const addWord=()=>{
    let word=receiveWord();
    wordsArray.push(word);
}
const drawHanged=()=>{

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
const clearHangmanDraw=()=>{
    hangmanFlag=0;
    pincel.clearRect(0, 0, 600, 400);
}
const drawPartOfHangman=()=>{
    hangmanFlag+=1;
    drawHanged();
}

/*disappear and appear Functions*/
const disappearStartPart=()=>document.getElementById("start").style.display="none";
const appearStartPart=()=>document.getElementById("start").style.display="flex";
const disappearWritePart=()=>document.getElementById("write").style.display="none";
const appearWritePart=()=>document.getElementById("write").style.display="flex";
const disappearGamePart=()=>document.getElementById("game").style.display="none";
const appearGamePart=()=>document.getElementById("game").style.display="flex";

/*button on click functions*/

const saveAndPlay=()=>{
    addWord();
    playGame();
}

const playGame=()=>{
    disappearStartPart();
    disappearWritePart();
    appearGamePart();
    chosenWord=chooseWord();
    showGuions();
    console.log(chosenWord);
    document.addEventListener("keypress",Verify);
    
}

const desist=()=>{
    clearHangmanDraw();
    clearGuions();
    disappearGamePart();
    appearStartPart();
}

const cancel=()=>{
    disappearWritePart();
    appearStartPart();
}

const writeYourWord=()=>{
    disappearStartPart();
    appearWritePart();
}


var hangmanFlag=0;
const wordsArray=["JAVA","HTML","VUE","CMAS","JAVASCRI","PYTHON","PROGRAMA"];
const errorWords=[];
var chosenWord=toString;

var pantalla=document.querySelector(".hangman-draw");
var pincel= pantalla.getContext("2d");

var silaba=document.querySelector(".lines-of-words");
var pincel2=silaba.getContext("2d");

var secreto= document.querySelector(".secret-word");
var pincel3= secreto.getContext("2d");


