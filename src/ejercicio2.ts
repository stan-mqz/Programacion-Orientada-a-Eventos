const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "USB", precio: 15 }
];

const productosCaros = productos.filter(producto => producto.precio > 50);

console.log(productosCaros);
