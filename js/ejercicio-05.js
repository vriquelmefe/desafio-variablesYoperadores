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