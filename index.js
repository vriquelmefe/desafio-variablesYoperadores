// EJERCICIO N°2 // desafio

var num1 = prompt('ingrese el primer número diferente y mayor a 0');
var num2 = prompt('ingrese el segundo número diferente y mayor a 0');

if ((num1 > 0 && num1 != 0) && (num2 > 0 && num2 != 0)) {
  var suma = parseInt(num1) + parseInt(num2);
  var resta = parseInt(num1) - parseInt(num2);
  var multiplicar = parseInt(num1) * parseInt(num2);
  var dividir = parseInt(num1) / parseInt(num2);
  var modulo = parseInt(num1) % parseInt(num2);
} else {
  alert('el numero ingresado no esta dentro del rango permitido');
}

document.write('El resultado de la suma es: ' + suma + '<br>');
document.write('El resultado de la resta es: ' + resta + '<br>');
document.write('El resultado de la multiplicación es: ' + multiplicar + '<br>');
document.write('El resultado de la división es: ' + dividir + '<br>');
document.write('El resultado del módulo es: ' + modulo + '<br>');


// EJERCICIO N°3 

var grados = prompt('ingrese la temperatura en grados Celsius');

var kelvin = parseInt(grados) + 273.15;
var fahrenheit = (parseInt(grados) * (9 / 5)) + 32;

document.write('La transformación de ' + grados + ' Celsius a Kelvin es: ' + kelvin + ' K' + '<br>');
document.write('La transformación de ' + grados + ' Celsius a Fahrenheiit es: ' + fahrenheit + ' °F' + '<br>');

// EJERICIO N°4

var numDias = prompt('ingrese una cantidad de dias a calcular');

dias = parseInt(numDias);

const anio = 365;
const semana = 7;
const SemanaAnios = 52;
var contAnios = 0;
var contSemana = 0;
restDay = 0;

function getAnios() {
  contAnios = dias / anio;
  return Math.floor(contAnios);
}

function getWeek() {
  contSemana = dias - (getAnios() * anio);
  contSemana = contSemana / semana;
  return Math.floor(contSemana);
}

function getDay() {
  contSemana = dias - (getAnios() * anio);
  restDay = contSemana - (getWeek() * semana);
  // restDay = ((dias - anio) - (getWeek() * semana));
  return restDay;
}


if (dias <= 7) {
  document.write('Son ' + dias + ' días ');
} else if (dias > 7) {
  document.write(getAnios(contAnios) + ' año(s) , ' + getWeek(contSemana) + ' semana(s) y ' + getDay(restDay) + ' dia(s)');
}

//EJERCICIO N°5

let numeros = [];
let acumulador = 0;
let promedio = 0;

for (i = 0; i <= 4; i++) {
  numeros.push(prompt('ingrese sus 5 números: ' + (i + 1) + ' °'));
  if (numeros[i] <= 0) {
    alert('El número ingresado es menor al rango permitido');
  } else {
    acumulador = acumulador + parseFloat(numeros[i]);
    promedio = (acumulador / numeros.length).toFixed(2);
  }
}
document.write('La suma es: ' + acumulador + '<br>');
document.write('El promedio es: ' + promedio);