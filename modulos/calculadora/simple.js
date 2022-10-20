const interface = require('readline-sync');

let response = "";
do{

    console.log("\033[2J");//me hace la cuenta y me limpia la pantalla de los resultados anteriores
    console.log("1.Suma");
    console.log("2.Resta");
    console.log("3.Multiplicacion");
    console.log("4.Division");
    console.log("5.Salir");
    response = interface.question("Que operacion sedeas realizar, escribe el numero:");
    
    if(response != "5"){
    const firstNumber = interface.question("Dame el primer numero: ");//question retorna un string
    const secondNumber = interface.question("Dame el segundo numero: ");

    switch(response){
        case "1":
            var result = parseInt(firstNumber) + parseInt(secondNumber); //con parseInt lo convierto a numero, sino retona cadena de caracteres
            console.log("El resultado es: "+ result); 
            break;
        case "2":
            var result = parseInt(firstNumber) - parseInt(secondNumber); //con parseInt lo convierto a numero, sino retona cadena de caracteres
            console.log("El resultado es: "+ result); 
            break;
        case "3":
            var result = parseInt(firstNumber) * parseInt(secondNumber); //con parseInt lo convierto a numero, sino retona cadena de caracteres
            console.log("El resultado es: "+ result); 
            break;
        case "4":
            var result = parseInt(firstNumber) / parseInt(secondNumber); //con parseInt lo convierto a numero, sino retona cadena de caracteres
            console.log("El resultado es: "+ result); 
            break;
            default:
                break;
    }
    interface.question("Presiona enterp para continuar"); // me perimite que no se ejecute el menu y me de tiempo a ver el resultado sin que se mezcle con el anterior
  }
}while (response !="5");