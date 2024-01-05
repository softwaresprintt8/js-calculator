function calculate(operator){
    value1 = parseFloat(document.getElementById("value1").value);
    value2 = parseFloat(document.getElementById("value2").value);
    if(operator == '+'){
        document.getElementById("result").innerHTML= value1+value2;
    }
    if(operator == '-'){
        document.getElementById("result").innerHTML= value1-value2;
    }
    if(operator == '*'){
        document.getElementById("result").innerHTML= value1*value2;
    }
    if(operator == '/'){
        document.getElementById("result").innerHTML= value1/value2;
    }
}