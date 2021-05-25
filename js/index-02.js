// EJERCICIO N°2 // desafio
//se le pide al usuario que ingrese los 2 numeros
var num1 = prompt('ingrese el primer número diferente y mayor a 0');
var num2 = prompt('ingrese el segundo número diferente y mayor a 0');
//verifica que este numero ingresado sea mayor o igual a 0, si no es no puede seguir el proceso
//si el numero es valido se comienza con el calculo de las operaciones aritmeticas
if ((num1 > 0 && num1 != 0) && (num2 > 0 && num2 != 0)) {
  var suma = parseInt(num1) + parseInt(num2);
  var resta = parseInt(num1) - parseInt(num2);
  var multiplicar = parseInt(num1) * parseInt(num2);
  var dividir = parseInt(num1) / parseInt(num2);
  var modulo = parseInt(num1) % parseInt(num2);
} else {
  alert('el numero ingresado no esta dentro del rango permitido');
}
//se muestra por pantalla el resultado de cada una de las operaciones
document.write('El resultado de la suma es: ' + suma + '<br>');
document.write('El resultado de la resta es: ' + resta + '<br>');
document.write('El resultado de la multiplicación es: ' + multiplicar + '<br>');
document.write('El resultado de la división es: ' + dividir + '<br>');
document.write('El resultado del módulo es: ' + modulo + '<br>');