// src/utils/fechas.js

export const formatearFecha = (fechaStr) => {
  const fecha = new Date(fechaStr);
  return fecha.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

export const formatoFechaISO = (fecha) => {
  return fecha.toISOString().split('T')[0];
};

export const esMismaFecha = (fecha1, fecha2) => {
  return (
    fecha1.getDate() === fecha2.getDate() &&
    fecha1.getMonth() === fecha2.getMonth() &&
    fecha1.getFullYear() === fecha2.getFullYear()
  );
};

export const obtenerDiasDelMes = (año, mes) => {
  const dias = [];
  const primerDia = new Date(año, mes, 1);
  const ultimoDia = new Date(año, mes + 1, 0);

  for (let i = 1; i <= ultimoDia.getDate(); i++) {
    dias.push(new Date(año, mes, i));
  }

  return dias;
};

export const obtenerNombreMes = (mesIndex) => {
  const nombres = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return nombres[mesIndex];
};

export const ordenarPorFecha = (a, b) => new Date(a.fechaInicio) - new Date(b.fechaInicio);
