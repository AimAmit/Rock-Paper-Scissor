let userPoint=0;
let compPoint=0;

const userDisplay = document.getElementById('user-point');
const compDisplay = document.getElementById('comp-point');
const rockClick = document.getElementById('Rock');
const paperClick = document.getElementById('Paper');
const scissorClick = document.getElementById('Scissor');
const textResult = document.getElementById('text-result');

function compMove(){
    const choices = ['r', 'p', 's'];
    let id = Math.floor(Math.random()*3);
    return choices[id];
}


rockClick.addEventListener('click', ()=>{
    clicked('r');
});
paperClick.addEventListener('click', ()=>{
    clicked('p');
});
scissorClick.addEventListener('click', ()=>{
    clicked('s');
});

function clicked(userChoice){
    let compChoice = compMove();
    let win;
    switch (userChoice+compChoice){
        case "rs":
        case "pr": 
        case "sp":
            userPoint+=1;
            win=1;
            document.getElementById(originalText(userChoice)).classList.add('green-glow');
            setTimeout(() =>{
                document.getElementById(originalText(userChoice)).classList.remove('green-glow')},
                300);
            break;

        case "sr":
        case "rp": 
        case "ps":
            compPoint+=1;
            win=-1;
            document.getElementById(originalText(userChoice)).classList.add('red-glow');
            setTimeout(() =>{
                document.getElementById(originalText(userChoice)).classList.remove('red-glow')},
                300);
            break;

        default:
            win=0;
    }
    updateScore();
    updateResult(userChoice, compChoice, win);
}

function updateScore(){
    userDisplay.innerHTML = userPoint.toString();
    compDisplay.innerHTML = compPoint.toString();
}

function updateResult(userChoice, compChoice, win){
    userChoice = originalText(userChoice);
    compChoice = originalText(compChoice);
    let out="";
    if(win==1) text = "You WINS over "+compChoice;
    else if(win==-1) text = "You losse to "+compChoice;
    else text = "It's a DRAW";
    textResult.innerHTML = text;
}
function originalText(input){
    if(input=='r') return "Rock";
    else if(input=='p') return "Paper";
    else return "Scissor";
}