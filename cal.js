let display=document.getElementById('display')

function append(value){
    //alert(value);
    //alert("1")
    display.value +=value;
}


function calculate(){
    display.value = eval(display.value);
}

function clear1(){
    //alert("ok");
    display.value='';
}

function backspace(){
    display.value=display.value.slice(0,-1);
}