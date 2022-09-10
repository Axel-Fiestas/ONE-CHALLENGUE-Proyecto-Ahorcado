export const aprendiendo=(tecnologia)=>{
    console.log(`Aprendiendo ${tecnologia}`);
}

export const chooseOneWord=(array)=>{
    let maxLimit=array.length-1;
    let random=Math.random()*(maxLimit+1);
    return array[Math.floor(random)];
}

export const showDashes=(word)=>{

    let part =document.querySelector(".letra");

    for(let i=0;i<word.length;i++){
        let letter=document.createElement("SPAN");
        letter.id="number"+i
        letter.textContent="_"+" ";
        part.appendChild(letter);
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
        }
    }
}

export const repited=(arr,letter)=>{
    for(let i=0;i<arr.length;i++){
        if(letter===arr[i])return true;
    }
    return false;
}

export const isALetter= letter=> (/[a-zA-Z]/).test(letter);

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


//export {aprendiendo};
