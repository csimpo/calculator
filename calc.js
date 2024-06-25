const display=document.querySelector('.display');
display.textContent="0";
 
let number="";
let operator="";
let number2="";

function add(a,b){
   return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b
}

const plus=document.querySelector('.add');
plus.addEventListener('click',()=>{
    operator="+";
    number=parseFloat(display.textContent);
    display.textContent="0";
    

})

const minus=document.querySelector('.subtract');
minus.addEventListener('click',()=>{
    operator="-";
    number = parseFloat(display.textContent);
    display.textContent="0";
})

const multiplybtn=document.querySelector('.multiply');
multiplybtn.addEventListener('click',()=>{
    operator="*"
    number=parseFloat(display.textContent);
    display.textContent="0";
})

const dividebtn=document.querySelector('.divide');
dividebtn.addEventListener('click',()=>{
    operator="÷";
    number=parseFloat(display.textContent);
    display.textContent="0";
})

const equals=document.querySelector('.equals');
equals.addEventListener('click',()=>{
    number2=parseFloat(display.textContent);
    if(operator==="+"){
        display.textContent= `${add(number,number2)}`;
    }
    else if (operator==="-"){
        display.textContent=`${subtract(number,number2)}`;
    }
    else if (operator==="*"){
        display.textContent=`${multiply(number,number2)}`;
    }
    else if (operator==="÷"){
        display.textContent=`${divide(number,number2)}`;
    }
    operator="";
    number="";
    number2="";

})
const zero = document.querySelector('.zero');
zero.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="0";
    }
    else {
        display.textContent+="0";
    }
})
const one = document.querySelector('.one');
one.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="1";
    }
    else {
        display.textContent+="1";
    }
})
const two = document.querySelector('.two');
two.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="2";
    }
    else {
        display.textContent+="2";
    }
})
const three = document.querySelector('.three');
three.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="3";
    }
    else {
        display.textContent+="3";
    }
})
const four = document.querySelector('.four');
four.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="4";
    }
    else {
        display.textContent+="4";
    }
})
const five = document.querySelector('.five');
five.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="5";
    }
    else {
        display.textContent+="5";
    }
})
const six = document.querySelector('.six');
six.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="6";
    }
    else {
        display.textContent+="6";
    }
})
const seven = document.querySelector('.seven');
seven.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="7";
    }
    else {
        display.textContent+="7";
    }
})
const eight = document.querySelector('.eight');
eight.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="8";
    }
    else {
        display.textContent+="8";
    }
})
const nine = document.querySelector('.nine');
nine.addEventListener('click',()=>{
    if(display.textContent==="0"){
        display.textContent="9";
    }
    else {
        display.textContent+="9";
    }
})

function allclear(){
    display.textContent="0";
    number="";
    number2="";
    operator="";
}

const ac=document.querySelector('.allclear');
ac.addEventListener('click',()=>{
    allclear();
})

