// Ejercicio 1
const nombre = "Gaston";
let edad = 21;
let carrera = "Instituto Politecnico";
let estado = "cursando";


// Ejercicio 2
let nota = Number(prompt("Ingrese una nota"));

if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}


// Ejercicio 3
let edadE3 = Number(prompt("Ingrese una edad"));

if (edadE3 < 13) {
    console.log("Niño");
} else if (edadE3 <= 17) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}


// Ejercicio 4
let numero = Number(prompt("Ingrese un número"));

for (let i = 1; i <= 10; i++) {
    console.log(i * numero);
}


// Ejercicio 5
let acumuladora = 0;

for (let i = 1; i < 100; i++) {
    acumuladora += i;
}

console.log(`Suma: ${acumuladora}`);


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
let sumaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i];
}

console.log(`El promedio es ${sumaNotas / notas.length}`);


// Ejercicio 9
let nombreEstudiante = "Gastonn";
let notasAlumno = [10, 10, 10, 10];

let suma = 0;

for (let i = 0; i < notasAlumno.length; i++) {
    suma += notasAlumno[i];
}

let promedio = suma / notasAlumno.length;

console.log(
`Estudiante: ${nombreEstudiante}
Promedio: ${promedio.toFixed(1)}
${promedio >= 6 ? "Aprobado" : "Desaprobado"}`
);