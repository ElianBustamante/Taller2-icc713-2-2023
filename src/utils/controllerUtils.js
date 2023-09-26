/**
 * Sends a response to the client with the given data.
 * If the data array is empty, sends a 404 error with a message.
 *
 * @param {Object} res - The response object.
 * @param {Array} data - The data to send in the response.
 */
const sendResponse = (res, data) => {
  data.length === 0 ? res.status(404).json({ error: 'No se encontraron juegos.' }) : res.json(data);
};
  
export { sendResponse };