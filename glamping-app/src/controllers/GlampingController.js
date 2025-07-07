import glampings from '../data/glampings.json';

/**
 * Retorna todos los glampings
 */
export const obtenerGlampings = () => {
  return glampings;
};

/**
 * Busca un glamping por su ID
 * @param {number|string} id 
 * @returns {object|null}
 */
export const obtenerGlampingPorId = (id) => {
  return glampings.find((g) => String(g.id) === String(id)) || null;
};
