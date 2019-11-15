import { LASTFM_API } from '../../config';
import axios from 'axios';
import dotenv from 'dotenv';

const ARTIST_SEARCH = 'method=artist.search';
dotenv.config();

const doRequest = async (url) => {
    return await axios.get(`${LASTFM_API}${url}&api_key=${process.env.API_KEY}&format=json`);
};

export const findArtists = async (term) => {
    return await doRequest(`?${ARTIST_SEARCH}&artist=${term}`);
};