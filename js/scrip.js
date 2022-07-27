let edadUsuario = prompt("Para salir escriba ESC")
i = 1;
edad = 0;
while( edadUsuario != "ESC"){
    edad2 = parseInt(prompt("Ingrese edad del usuario"))
    edadUsuario = prompt("Ingrese ESC O + para sumar")
    edadfinal = edad + edad2;
    i++;
}
promedio = edadfinal/i;
alert("Promedio de edades : "+promedio+" años")

// let edades = parseInt(prompt("¿Cuantas personas se registraron?"))
// edad = 0;
// i = 1;
// while(i<=edades){
//     edadUsuario = parseInt(prompt("Ingrese la edad del usuario"))
//     edadfinal = edad + edadUsuario;
//     i++;
// }
// promedio = edadfinal/edades;
// alert("Promedio de edades : "+promedio+" años")