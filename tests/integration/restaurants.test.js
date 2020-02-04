const request = require('supertest');

let server;

describe('/restaurants', ()=> {
    beforeEach(() => { server = require('../../index');})
    afterEach(async () => {
        await server.close();
    });

    describe('GET /', () => {
        it('should return all restaurants', async () => {
            const result = await request(server).get('/restaurants');

            expect(result.status).toBe(200);
            expect(result.body.some(r => r.name ==='Social Burgerjoint Citycenter')).toBeTruthy();
            expect(result.body.some(r => r.name ==="MorriSon's Helsinki")).toBeTruthy();
        });

        it('should return restaurants if valid query is passed', async () => {
            const result = await request(server).get('/restaurants?q=sushi');

            expect(result.status).toBe(200);
            expect(result.body.some(r => r.name ==='Hanko Sushi Forum')).toBeTruthy();
        });

        it('it should return restaurants if an invalid query is passed', async () => {
            const result = await request(server).get('/restaurants?lasse=moi');

            expect(result.status).toBe(200);
            expect(result.body.some(r => r.name ==='Fuku Helsinki')).toBeTruthy();
        });


    });
});