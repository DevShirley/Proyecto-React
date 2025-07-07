class Glamping {
  constructor(id, nombre, capacidad, precioPorNoche, disponible = 'Sí', caracteristicas = '') {
    this.id = id;
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.precioPorNoche = precioPorNoche;
    this.disponible = disponible;
    this.caracteristicas = caracteristicas;
  }
}

export default Glamping;
