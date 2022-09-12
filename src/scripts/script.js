import {
    chooseOneWord,
    showDashes,
    checkWord,
    changeWord,
    addLettersToArray,
    repited,
    stringWrongWords, checkLose,
    clearHangmanDraw, clearDashes,
    checkWin
} from '/src/scripts/functions.js';
import {drawHanged} from '/src/scripts/Hanged.js';


//Values

const words=["HTML","HELLO","CSHARE","JAVA","ALURA","CAT"];

var usedLetters=[]

var wrongLetters=[]

var secretWord="";

var hangmanFlag=0;

//Restore Function
const restoreData=()=>{
    hangmanFlag=0;
    usedLetters=[];
    wrongLetters=[];
}

const eventoPrincipal=()=>{document.addEventListener("keypress", function(event){

    let letter=event.key.toUpperCase();
    let isRepited=repited(usedLetters,letter);
    let isPartOfWord=checkWord(secretWord,letter);
    let youLose=checkLose(hangmanFlag);

    if(checkWin(secretWord,usedLetters)){
        console.log("YOU WIN!");
    }

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

})};



const dScreen=document.querySelector(".hangman-draw");
const dWrongLetters=document.querySelector('.error-words');
const pincel= dScreen.getContext("2d");

//Button click
const startButton= document.getElementById("start");
startButton.addEventListener("click",()=>{
    document.getElementById("initial-part").style.display = "none";
    document.getElementById("game-part").style.display="flex";
    secretWord=chooseOneWord(words);
    showDashes(secretWord);
    eventoPrincipal();
});

const addButton=document.getElementById("add");
addButton.addEventListener("click", ()=>{
    document.getElementById("initial-part").style.display = "none";
    document.getElementById("secondary-part").style.display="flex";
});

const newGame=document.getElementById("new-start");
newGame.addEventListener("click",()=>{

    clearDashes(secretWord);
    secretWord=chooseOneWord(words);
    showDashes(secretWord);
    restoreData();
    clearHangmanDraw(pincel);

});







