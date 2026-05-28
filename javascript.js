// Ejercicio1
const nombre = "Gaston";
let edad = 21;
let carrera = "Instituto politecnico";
let estado = "cursando";


// Ejercicio 2
let nota = Number(prompt());


if (nota >= 6){
    return console.log("Aprobado")
} else {
    return console.log("Desaprobado")
}


// Ejercicio3
let edadE3 = Number(prompt());


if (edadE3 < 13) {
    return console.log("Niño")
} else if(edadE3 >= 13 && edadE3 <= 17){
    return console.log("Adolescente")
} else if(edadE3 >= 18){
    return console.log("Adulto")
}

// Ejercicio4
let numero = Number(prompt())


for(var i = 1; i <= 10; i++){
    console.log(i*10)
    
}


// Ejercicio 5

let acumuladora = 0;


for(var i = 1; i < 100; i ++){
    acumuladora += i;
}

console.log(`suma ${acumuladora}`)


// Ejercicio 6

for (let i = 1; i <= 20; i++) {

  if (i % 2 === 0) {
    console.log(i + " es par");
  } else {
    console.log(i + " es impar");
  }

}



// Ejercicio 7
const estudiante = {
    nombre: "Gaston",
    apellido: "Encina",
    nota: 9,

    aprueba() {
        return this.nota >= 6 ? "Aprobado" : "Desaprobado";
    }
};

console.log(estudiante.aprueba());


// Ejercicio 8
let notas = [6, 7, 6, 9];

let acumuladora = 0;

for (let i = 0; i < notas.length; i++) {
    acumuladora += notas[i];
}

console.log(`El promedio es ${acumuladora / notas.length}`);

//Ejercicio 9
let nombreEstudiante = "Gastonn";
let notasAlumno = [10, 10, 10, 10];

let suma = 0;
let promedio = suma / notasAlumno.length;


for (let i = 0; i < notasAlumno.length; i++) {
    suma += notasAlumno[i];
}


console.log(
    `Estudiante: ${nombreEstudiante}
Promedio: ${promedio.toFixed(1)}
${promedio >= 6 ? "Aprobado" : "Desaprobado"}`
);




