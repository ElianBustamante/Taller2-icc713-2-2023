import express from 'express';

const app = express();
/**
 * The port number to listen on. If the environment variable PORT is set, it will be used, otherwise it will default to 3000.
 * @type {number}
 */
const PORT = process.env.PORT || 3000;

app.use(express.json());

export { app, PORT };
