const sendResponse = (res, data) => {
  data.length === 0 ? res.status(404).json({ error: 'No se encontraron juegos.' }) : res.json(data);
};
  
export { sendResponse };