interface Asistente {
  nombre: string;
  carrera: string;
  email?: string;
  asiento?: number;
}

const asistente1: Asistente = {
  nombre: "Maria Lopez",
  carrera: "Ingenieria en Desarrollo de Software",
  email: "u20250347@univo.edu.sv",
  asiento: 12
};

const asistente2: Asistente = {
  nombre: "Carlos Ramirez",
  carrera: "Arquitectura"
};

function imprimirAsistente(asistente: Asistente) {
  console.log(`Nombre del asistente: ${asistente.nombre}`);
  console.log(`Carrera del asistente: ${asistente.carrera}`);

  if (asistente.email) {
    console.log(`Email: ${asistente.email}`);
  } else {
    console.log("Email: no registrado");
  }

  if (asistente.asiento !== undefined) {
    console.log(`Asiento: ${asistente.asiento}`);
  } else {
    console.log("Asiento: no asignado");
  }

  console.log("-----------------------------");
}

imprimirAsistente(asistente1);
imprimirAsistente(asistente2);