export const chooseOneWord=(array)=>{
    let maxLimit=array.length-1;
    let random=Math.random()*(maxLimit+1);
    return array[Math.floor(random)];
}

export const showDashes=(word)=>{

    let part =document.querySelector(".letra");

    for(let i=0;i<word.length;i++){
        let letter=document.createElement("SPAN");
        let space=document.createElement("SPAN");
        letter.id="number"+i
        letter.textContent="_";
        space.textContent=" ";
        part.appendChild(letter);
        part.appendChild(space)
    }
}


export const clearDashes=(word)=>{

    for(let i=0;i<word.length;i++){
        let name="number"+i;
        let letter=document.getElementById(name);
        letter.remove();
    }

}


export const checkWord=(word,letter)=> {

    if(!isALetter(letter))return false;

    for(let i=0;i<word.length;i++) if(letter===word[i])return true;

    return false;
}

export const changeWord=(word,letter)=> {

    for(let i=0;i<word.length;i++){

        if(letter===word[i]){
            let name=`number${i}`;
            let disableLetter=document.getElementById(name);
            disableLetter.textContent=letter;
            disableLetter.style.textDecoration="underline";
            disableLetter.style.textUnderlineOffset="3px";
        }
    }
}

export const checkWin=(word)=>{

    let wordDone="";
    for(let i=0;i<word.length;i++){
        let name="number"+i;
        let letter=document.getElementById(name);
        wordDone+=letter.textContent;
    }

    return wordDone===word;
}

export const repited=(arr,letter)=>{
    for(let i=0;i<arr.length;i++){
        if(letter===arr[i])return true;
    }
    return false;
}

export const isALetter= letter=> (/[A-Z]/).test(letter);

export const containCharacterEspecial=word=>{
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(word);
}

export const containNumber=word=>{
    return /^-?\d+$/.test(word);
}

export const isAMayus=word=>{

    if(!containNumber(word.value) && !containCharacterEspecial(word.value)){
        let new_word=word.value.toUpperCase();
        return word.value===new_word;
    }else{
        return false;
    }


}

export const addLettersToArray=(arr,letter)=>{arr.push(letter);}

export const stringWrongWords=(arr)=>{
    let text="";
    for(let i=0;i<arr.length;i++){
        text+=arr[i];
        text+=" ";
    }
    return text;
}

export const checkLose=(data)=>data>=10;

export const clearHangmanDraw=(pincel)=>{
    pincel.clearRect(0, 0, 600, 400);
}
