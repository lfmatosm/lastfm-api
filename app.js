import setMiddlewares from './src/middlewares';
import express from 'express';

const app = express();
setMiddlewares(app);

const server = (app.listen(5000, () => {
    console.log('LastFM API server is listening at port 5000.')
}));

export default { app, server };