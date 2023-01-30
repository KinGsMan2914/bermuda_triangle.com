const question=[
{
'que':'Which of the follwing is a markup language?',
'a':'HTML',
'b':'CSS',
'c':'Javascript',
'd':'php',
'correct':'a'
},
{
'que':'What year was java lunched?',
'a':'1996',
'b':'1995',
'c':'1994',
'd':'none',
'correct':'b'
},
{
'que':'CSS stands for?',
'a':'hypertext markup language',
'b':'Cascading style sheet',
'c':'Json object notation',
'd':'none of above',
'correct':'b'
}

]
let index=1;
const queBox=document.getElementById("queBox")
const loadQuestion=()=>{
const data =question[index]
queBox.innerText='${index+1}) ${data.que}';

}
loadQuestion();









