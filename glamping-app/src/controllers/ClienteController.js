import clientes from '../data/clientes.json';

/**
 * Retorna todos los clientes
 */
export const obtenerClientes = () => {
  return clientes;
};

/**
 * Busca un cliente por su ID
 * @param {number|string} id 
 * @returns {object|null}
 */
export const obtenerClientePorId = (id) => {
  return clientes.find(c => String(c.id) === String(id)) || null;
};
