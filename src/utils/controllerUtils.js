const sendResponse = (res, data) => {
    if (data.length === 0) {
      res.status(404).json({ error: 'No se encontraron juegos.' });
    } else {
      res.json(data);
    }
  };
  
  export { sendResponse };