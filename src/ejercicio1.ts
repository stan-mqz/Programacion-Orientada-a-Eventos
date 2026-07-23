const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 60 }
];

const productosConDescuento = productos.map(producto => ({
  ...producto,
  precio: producto.precio - (producto.precio * 0.10)
}));

console.log(productosConDescuento);
