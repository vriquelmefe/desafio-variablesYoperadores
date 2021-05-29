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


//otra forma

// let cantidadDeDias;
// do {
//   cantidadDeDias = +prompt("Ingrese la cantidad de días", "373");
// } while (cantidadDeDias < 0);
// // scope
// var cantidadDeAños = Math.floor(cantidadDeDias / 365);
// console.log("Cantidad de años: " + cantidadDeAños);

// var cantidadDeSemanas = Math.floor((cantidadDeDias % 365) / 7);
// console.log("Cantidad de semanas: " + cantidadDeSemanas);

// // var cantidadDeDiasRestantes = Math.floor(
// //   cantidadDeDias - cantidadDeAños * 365 - cantidadDeSemanas * 7
// // );
// var cantidadDeDiasRestantes = Math.floor((cantidadDeDias % 365) % 7);
// console.log("Cantidad de días restantes: " + cantidadDeDiasRestantes);