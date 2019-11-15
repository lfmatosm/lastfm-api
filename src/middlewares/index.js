import routes from '../routes';
import errorHandler from '../utils/errorHandler';
import express from 'express';
import cors from 'cors';

export default (app) => {
    app.use(express.json());
    app.use(cors());
    app.use('/lastfm-api', routes);
    app.use(errorHandler.notFoundErrorHandler);
    app.use(errorHandler.defaultErrorHandler);
};