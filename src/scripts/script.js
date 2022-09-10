import {
    chooseOneWord,
    showDashes,
    checkWord,
    changeWord,
    addLettersToArray,
    repited,
    stringWrongWords, checkLose
} from '/src/scripts/functions.js';
import {drawHanged} from '/src/scripts/Hanged.js';


//Values

const words=["HTML","HELLO","CSHARE","JAVA","ALURA","CAT"];

const secretWord=chooseOneWord(words);

const usedLetters=[]

const wrongLetters=[]

var hangmanFlag=0;


const dScreen=document.querySelector(".hangman-draw");
const dWrongLetters=document.querySelector('.error-words');
const pincel= dScreen.getContext("2d");

//Button click
const startButton= document.getElementById("start");
startButton.addEventListener("click",function (){
    document.getElementById("initial-part").style.display = "none";
    document.getElementById("game-part").style.display="flex";
});

showDashes(secretWord);

document.addEventListener("keypress", function(event){

    let letter=event.key.toUpperCase();
    let isRepited=repited(usedLetters,letter);
    let isPartOfWord=checkWord(secretWord,letter);
    let youLose=checkLose(hangmanFlag);

    if(!isRepited && !youLose){

        addLettersToArray(usedLetters,letter);

        if(isPartOfWord) changeWord(secretWord,letter);
        else{
            addLettersToArray(wrongLetters,letter);
            hangmanFlag++;
            drawHanged(hangmanFlag,pincel);
            dWrongLetters.innerHTML= stringWrongWords(wrongLetters);
        }
    }

});



//const btnEnviar=document.querySelector(".boton-enviar");
//btnEnviar.addEventListener('click',function (){
//    hangmanFlag++;
//    drawHanged(hangmanFlag,pincel);
//});




