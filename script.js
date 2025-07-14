function calculate() {
    const dato1= document.getElementById("input1").value;
    const dato2= document.getElementById("input2").value;
    const operador= document.querySelector("select").value;
    var resultado;

    if (dato1 === "" || dato2 === "") {
        alert("Por favor, ingrese ambos números.");
        return;
    }else {
        switch(operador) {
        case "+":
            resultado= parseInt(dato1) + parseInt(dato2);
            break;
        case "-":
            resultado= parseInt(dato1) - parseInt(dato2);
            break;
        case "*":
            resultado=parseFloat(dato1) * parseFloat(dato2);
            break;
        case "/":
            if (dato2 == 0) {
                resultado = "Error: División por cero";
            } else {
                resultado= parseFloat(dato1) / parseFloat(dato2);
            }
            break;
        default:
            resultado="Operador no válido";          
}
    }
    console.log(resultado);
    document.getElementById("result").innerText= resultado;
}
