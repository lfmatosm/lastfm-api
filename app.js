import setMiddlewares from './src/middlewares';
import express from 'express';

const app = express();
setMiddlewares(app);

let server;

if (process.env.NODE_ENV !== 'test') {
    server = (app.listen(5000, () => {
        console.log('LastFM API server is listening at port 5000.')
    }));
}

module.exports = { app };