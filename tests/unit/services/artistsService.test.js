import * as ArtistsRepository from '../../../src/repositories/artistsRepository';
import { app } from '../../../app';
import supertest from 'supertest';
import status from 'http-status';

const request = supertest(app);

const mockedValue = {
    'data': {
        'results': {
            'artistmatches': {
                'artist': [
                    {
                        'name': 'Cher',
                        'listeners': '1145138',
                        'mbid': 'bfcc6d75-a6a5-4bc6-8282-47aec8531818',
                        'url': 'https://www.last.fm/music/Cher',
                        'streamable': '0',
                        'image': [
                            {
                                '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
                                'size': 'small'
                            },
                            {
                                '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
                                'size': 'medium'
                            },
                            {
                                '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
                                'size': 'large'
                            },
                            {
                                '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
                                'size': 'extralarge'
                            },
                            {
                                '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
                                'size': 'mega'
                            }
                        ]
                    }
                ]
            }
        }
    }
};

describe('Unit - ArtistsService', () => {
    afterEach(() => {
        jest.resetAllMocks();
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    test('GET /lastfm-api/artists', async () => {
        jest.spyOn(ArtistsRepository, 'findArtists').mockResolvedValue(mockedValue);

        const expected = [
            {
                'name': 'Cher',
                'listeners': '1145138',
                'url': 'https://www.last.fm/music/Cher'
            }
        ];

        await request.get('/lastfm-api/artists')
                     .query({ name: 'Cher' })
                     .expect(status.OK, expected);
    });
});