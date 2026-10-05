const quiz = [
{
question:"Which language is used for styling web pages?",
options:["HTML","CSS","Python","Java"],
answer:"CSS"
},
{
question:"Which language makes websites interactive?",
options:["Java","JavaScript","C","PHP"],
answer:"JavaScript"
},
{
question:"Which HTML tag is used for images?",
options:["img","image","picture","src"],
answer:"img"
}
];

let current = 0;

function loadQuestion(){

document.getElementById("question").innerText =
quiz[current].question;

let buttons =
document.getElementsByClassName("option");

for(let i=0;i<buttons.length;i++){

buttons[i].innerText =
quiz[current].options[i];

}

document.getElementById("result").innerText="";
}

function checkAnswer(btn){

if(btn.innerText===quiz[current].answer){

document.getElementById("result").innerText=
"Correct Answer";

document.getElementById("result").style.color="green";

}
else{

document.getElementById("result").innerText=
"Wrong Answer";

document.getElementById("result").style.color="red";

}

}

function nextQuestion(){

current++;

if(current>=quiz.length){

current=0;

}

loadQuestion();

}

loadQuestion();

async function getJoke(){

const response = await fetch("https://official-joke-api.appspot.com/random_joke");

const data = await response.json();

document.getElementById("joke").innerHTML =
"<b>"+data.setup+"</b><br><br>"+data.punchline;

}