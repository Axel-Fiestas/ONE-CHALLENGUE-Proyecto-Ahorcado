import {
    chooseOneWord,
    showDashes,
    checkWord,
    changeWord,
    addLettersToArray,
    repited,
    stringWrongWords, checkLose,
    clearHangmanDraw, clearDashes,
    checkWin, isALetter, isAMayus
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
    document.getElementById("new-word").value = "";
}

const eventoPrincipal=()=>{document.addEventListener("keypress", function(event){

    let letter=event.key.toUpperCase();
    let isRepited=repited(usedLetters,letter);
    let isPartOfWord=checkWord(secretWord,letter);
    let youLose=checkLose(hangmanFlag);
    let youWin=checkWin(secretWord);

    if(!isRepited && !youLose && !youWin){

        addLettersToArray(usedLetters,letter);

        if(isPartOfWord) changeWord(secretWord,letter);
        else{
            addLettersToArray(wrongLetters,letter);
            hangmanFlag++;
            drawHanged(hangmanFlag,pincel);
            dWrongLetters.innerHTML= stringWrongWords(wrongLetters);
        }

        if(checkWin(secretWord)){
            console.log("YOU WIN!");
        }

        if(checkLose(hangmanFlag)){
            console.log("YOU LOSE!");
        }
    }



})};

const dScreen=document.querySelector(".hangman-draw");
const dWrongLetters=document.querySelector('.error-words');
const pincel= dScreen.getContext("2d");
const restoreAll=()=>{
    clearDashes(secretWord);
    secretWord=chooseOneWord(words);
    showDashes(secretWord);
    restoreData();
    dWrongLetters.innerHTML= "";
    clearHangmanDraw(pincel);
}

//Button click
const startButton= document.getElementById("start");
startButton.addEventListener("click",()=>{
    document.getElementById("initial-part").style.display = "none";
    document.getElementById("game-part").style.display="flex";
    restoreAll();
    eventoPrincipal();
});

const addButton=document.getElementById("add");
addButton.addEventListener("click", ()=>{
    document.getElementById("initial-part").style.display = "none";
    document.getElementById("secondary-part").style.display="flex";
});

const newGame=document.getElementById("new-start");
newGame.addEventListener("click",()=>{
    restoreAll();
});

const desist=document.getElementById("desist");
desist.addEventListener("click",()=>{
    restoreAll();
    document.getElementById("game-part").style.display="none";
    document.getElementById("initial-part").style.display="flex";
})

const newWord=document.getElementById("new-word");

const addAndStart=document.getElementById("save-start");
addAndStart.addEventListener("click",()=>{

    console.log(newWord.value);

    if(isAMayus(newWord)){
        words.push(newWord.value);
        document.getElementById("secondary-part").style.display="none";
        document.getElementById("game-part").style.display="flex";
        restoreAll();
        eventoPrincipal();
    }else{
        alert("La palabra introducida no es correcta");
    }


})

const cancelButton=document.getElementById("cancel");
cancelButton.addEventListener("click",()=>{
    document.getElementById("secondary-part").style.display="none";
    document.getElementById("initial-part").style.display="flex";
    restoreAll();
})








