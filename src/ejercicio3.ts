const evento = {
  tipo: "CLICK",
  coordenadas: { x: 100, y: 200 },
  usuario: "Manolo"
};

const {
  tipo,
  coordenadas: { x, y },
  usuario
} = evento;

console.log(`Tipo: ${tipo}, Coordenadas: ${x}, ${y}, Usuario: ${usuario}`); 