var pinpad = document.querySelector(".pinpad");
var buttons = pinpad.querySelectorAll("button");
var enterButton = document.getElementById("enterButton");

function handleNumberPress(num){
    console.log(num);
}

for (var i = 0; i < 10; i++){
    buttons[i].onclick = function(){handleNumberPress((i+1)%10)}
}