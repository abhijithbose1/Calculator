var screen=document.getElementById("screen");

function buttonClick(value){
    screen.value+=value;

}
function clearDisplay(){
    screen.value='';
}
function displayResult(){
    var result = eval(screen.value)
    screen.value = result;
}