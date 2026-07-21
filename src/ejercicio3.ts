type tipo = 'VIP' | 'GENERAL'

const calcularPrecio = (precioBase: number, tipo: tipo, codigo?: string): number => {
  let precioTotal  = precioBase;

  if (tipo === "VIP") {
    precioTotal += 20;
  }

  if (codigo === "ESTUDIANTE") {
    precioTotal = precioTotal * 0.5;
  }

  return precioTotal;
};

const entrada1 = calcularPrecio(50, "GENERAL");
const entrada2 = calcularPrecio(50, "VIP");
const entrada3 = calcularPrecio(50, "GENERAL", "ESTUDIANTE");
const entrada4 = calcularPrecio(50, "VIP", "ESTUDIANTE");

console.log(`Entrada GENERAL sin descuento: $${entrada1}`);
console.log(`Entrada VIP sin descuento: $${entrada2}`);
console.log(`Entrada GENERAL con descuento estudiante: $${entrada3}`);
console.log(`Entrada VIP con descuento estudiante: $${entrada4}`);