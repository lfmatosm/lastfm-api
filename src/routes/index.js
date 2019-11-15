import { Router } from 'express';
import { getArtists } from '../services/artistsService';

const routes = new Router();

routes.get('/artists', getArtists);

export default routes;