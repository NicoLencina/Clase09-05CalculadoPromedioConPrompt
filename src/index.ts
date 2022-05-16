let prom, nt1, nt2, nt3, sumaNota: number;

let nombre = prompt("ingrese el nombre de Alumno:");
console.log("Alumno :" + nombre);

while (nombre !== "") {
  nt1 = Number(prompt("ingrese calificacion de la Practica"));
  nt2 = Number(prompt("ingrese calificacion del Problema"));
  nt3 = Number(prompt("ingrese calificacion del Teorico"));
  console.log(
    "Calificacion Practica :" + nt1,
    "Calificacion Problema :" + nt2,
    "Calificacion Teorico :" + nt3
  );

  if (nt1 > -1 && nt2 > -1 && nt3 > -1 && nt1 <= 10 && nt2 <= 10 && nt3 <= 10) {
    prom = console.log(
      "el promedio de",
      nombre,
      "es",
      nt1 * 0.1 + nt2 * 0.5 + nt3 * 0.4
    );
  } else {
    console.log("error, usted ingreso un valor errone");
  }
  nombre = prompt("ingrese el nombre de Alumno:");
  if (nombre !== "") {
    console.log("Alumno :" + nombre);
  }
}
