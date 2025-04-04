import { createMocks } from 'node-mocks-http';
import handler from './newsletters';
import { NEWSLETTER_ITEMS } from '@/app/mocks/newsletters';

describe('API handler /api/newsletter', () => {
  it('devrait renvoyer un statut 200 avec les newsletters pour une requête GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res.statusCode).toBe(200);

    expect(res._getData()).toEqual(JSON.stringify(NEWSLETTER_ITEMS)); 
  });

  it('devrait renvoyer un statut 405 pour une méthode non GET', async () => {
    const { req, res } = createMocks({
      method: 'POST',
    });

    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });
});
