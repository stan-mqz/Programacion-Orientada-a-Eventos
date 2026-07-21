interface Producto {
  nombre: string;
  precio: number;
  descuento?: number;
}

const productos: Producto[] = [
  { nombre: "Laptop", precio: 1200, descuento: 0.1 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado Mecanico", precio: 80, descuento: 0.15 },
  { nombre: "Monitor", precio: 300 }
];

productos.forEach((producto) => {
  const precioFinal = producto.precio - (producto.descuento ? producto.precio * producto.descuento : 0);

  console.log(`Producto: ${producto.nombre}`);
  console.log(`Precio original: $${producto.precio}`);
  console.log(`Precio final: $${precioFinal.toFixed(2)}`);
  console.log("-----------------------------");
});