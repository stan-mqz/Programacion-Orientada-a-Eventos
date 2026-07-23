enum EstadoUsuario {
  ACTIVO = "ACTIVO",
  INACTIVO = "INACTIVO",
  SUSPENDIDO = "SUSPENDIDO"
}

const estado: EstadoUsuario = EstadoUsuario.ACTIVO;

console.log(`El estado actual es: ${estado}`); 