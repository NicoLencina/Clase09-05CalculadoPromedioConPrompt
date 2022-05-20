let nt1, nt2, nt3, sumaNota: number;

let nombre = prompt("Ingrese el nombre de Alumno:");

while (nombre !== "") {
  console.log("Alumno :" + nombre);
  nt1 = Number(prompt("Ingrese calificacion de la Practica"));
  nt2 = Number(prompt("Ingrese calificacion del Problema"));
  nt3 = Number(prompt("Ingrese calificacion del Teorico"));
  console.log(
    "Calificacion Practica :" + nt1,
    "Calificacion Problema :" + nt2,
    "Calificacion Teorico :" + nt3
  );

  if (nt1 > -1 && nt2 > -1 && nt3 > -1 && nt1 <= 10 && nt2 <= 10 && nt3 <= 10) {
    sumaNota = nt1 * 0.1 + nt2 * 0.5 + nt3 * 0.4;
    console.log("el promedio de" + nombre + "es" + sumaNota);
  } else {
    console.log("error, usted ingreso un valor errone");
    console.log(
      "Controle los valores ingresados: Nota Practica: " + nt1,
      " Nota Problema: " + nt2,
      " Nota Teorica: " + nt3
    );
  }
  nombre = prompt("ingrese el nombre de Alumno:");
}
console.log("Gracias por usarme XD");
