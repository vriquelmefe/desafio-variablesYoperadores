// EJERCICIO N°3 
//le pedimos al usuario que ingrese los grados celcius a calcular
var grados = prompt('ingrese la temperatura en grados Celsius');
//transformamos los celcius a kelvin y fahrenheit
var kelvin = parseInt(grados) + 273.15;
var fahrenheit = (parseInt(grados) * (9 / 5)) + 32;
//mostramos en pantalla el resultado de este calculo
document.write('La transformación de ' + grados + ' Celsius a Kelvin es: ' + kelvin + ' K' + '<br>');
document.write('La transformación de ' + grados + ' Celsius a Fahrenheiit es: ' + fahrenheit + ' °F' + '<br>');