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


// EJERCICIO N°3 
//le pedimos al usuario que ingrese los grados celcius a calcular
var grados = prompt('ingrese la temperatura en grados Celsius');
//transformamos los celcius a kelvin y fahrenheit
var kelvin = parseInt(grados) + 273.15;
var fahrenheit = (parseInt(grados) * (9 / 5)) + 32;
//mostramos en pantalla el resultado de este calculo
document.write('La transformación de ' + grados + ' Celsius a Kelvin es: ' + kelvin + ' K' + '<br>');
document.write('La transformación de ' + grados + ' Celsius a Fahrenheiit es: ' + fahrenheit + ' °F' + '<br>');

// EJERICIO N°4 // Calcular dias, semanas y años dentro de un numeor ingresado por usuario
//pedimos al usuario que ingrese la cnatidad de dias a calcular
var numDias = prompt('ingrese una cantidad de dias a calcular');
//transformamos el ingreso de string a number para poder manipular
dias = parseInt(numDias);
//creacion de constantes para trabajar en las funciones
const anio = 365;
const semana = 7;
const SemanaAnios = 52;
var contAnios = 0;
var contSemana = 0;
restDay = 0;
//funcion para calcular los años dentro del numero ingresado por el usuario
function getAnios() {
  contAnios = dias / anio;
  return Math.floor(contAnios);
}
//funcion para calcular las semanas del numero ingresado por el usuario menos los los años por la cantidad de dias en 1 año 
function getWeek() {
  contSemana = dias - (getAnios() * anio);
  contSemana = contSemana / semana;
  return Math.floor(contSemana);
}
//funcion para calcular los dias restantes
function getDay() {
  contSemana = dias - (getAnios() * anio);
  restDay = contSemana - (getWeek() * semana);
  // restDay = ((dias - anio) - (getWeek() * semana));
  return restDay;
}

//si el numero ingresado es menor a 1 semana mostrara solo los dias
if (dias <= 7) {
  document.write('Son ' + dias + ' días ');
  //si el numero ingresado por el usuario es mayor a 7 entregamos por pantalla el calculo de años, semanas y dias
} else if (dias > 7) {
  document.write(getAnios(contAnios) + ' año(s) , ' + getWeek(contSemana) + ' semana(s) y ' + getDay(restDay) + ' dia(s)');
}

//EJERCICIO N°5
//creamos arreglo que contendra los numeros ingresadas por el usuario
let numeros = [];
//acumulador de la suma de estos numeros
let acumulador = 0;
//varible que almacenara el promedio
let promedio = 0;

//recorremos el arreglo ingresando en cada posicion 1 numero ingresado por el usuario
for (i = 0; i <= 4; i++) {
  numeros.push(prompt('ingrese sus 5 números: ' + (i + 1) + ' °'));
  //si el numero en la posicion que va el iterador es menor o igual a  0 saldra alerta de que numero es invalido para operacion
  if (numeros[i] <= 0) {
    alert('El número ingresado es menor al rango permitido');
    //si el numero es valido ira sumando los numero y sacando promedio. 
  } else {
    acumulador = acumulador + parseFloat(numeros[i]);
    promedio = (acumulador / numeros.length).toFixed(2);
  }
}
//terminado el ciclo imprimiremos por pantalla el resultado de cada operación
document.write('La suma es: ' + acumulador + '<br>');
document.write('El promedio es: ' + promedio);