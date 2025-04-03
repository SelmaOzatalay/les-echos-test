// __tests__/newsletter.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import NewsletterPage, { getServerSideProps } from '../pages/newsletter';  // Assurez-vous du bon chemin d'import
import '@testing-library/jest-dom';
import { USER_WITH_ONE_SUBSCRIPTION } from '@/app/mocks/user';
import { NEWSLETTER_ITEMS } from '@/app/mocks/newsletters';

jest.mock('next/fetch', () => jest.fn());
jest.mock('@/app/mocks/newsletters', () => ({
  NEWSLETTER_ITEMS: [
    { id: '1', title: 'Newsletter 1', site: 'DEN', subscriptions: ['RIGHT_1'], description: 'First Newsletter' },
    { id: '2', title: 'Newsletter 2', site: 'FR', subscriptions: ['RIGHT_2'], description: 'Second Newsletter' },
  ],
}));
jest.mock('@/app/mocks/user', () => ({
  USER_WITH_ONE_SUBSCRIPTION: {
    subscriptions: ['RIGHT_1'],
  },
}));

describe('NewsletterPage', () => {

  it('rend correctement la page de newsletters', async () => {
    const mockNewsletters = [
      { id: '1', title: 'Newsletter 1', site: 'DEN', subscriptions: ['RIGHT_1'], description: 'First Newsletter', userCanSubscribe: true },
      { id: '2', title: 'Newsletter 2', site: 'FR', subscriptions: ['RIGHT_2'], description: 'Second Newsletter', userCanSubscribe: false },
    ];

    const mockSites = ['DEN', 'FR'];

    render(<NewsletterPage newsletters={mockNewsletters} sites={mockSites} />);

    expect(screen.getByText('Newsletter 1')).toBeInTheDocument();
    expect(screen.getByText('Newsletter 2')).toBeInTheDocument();

    expect(screen.getByText('First Newsletter')).toBeInTheDocument();
    expect(screen.getByText('Second Newsletter')).toBeInTheDocument();
  });

  it('effectue correctement l’appel à getServerSideProps', async () => {
    const mockNewsletters = [
      { id: '1', title: 'Newsletter 1', site: 'DEN', subscriptions: ['RIGHT_1'], description: 'First Newsletter' },
      { id: '2', title: 'Newsletter 2', site: 'FR', subscriptions: ['RIGHT_2'], description: 'Second Newsletter' },
    ];
    const mockSites = ['DEN', 'FR'];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockNewsletters),
    });

    const result = await getServerSideProps({});

    if ('props' in result) {
      expect(result.props.newsletters).toHaveLength(2);
      expect(result.props.newsletters[0].userCanSubscribe).toBe(true);
      expect(result.props.newsletters[1].userCanSubscribe).toBe(false);

      expect(result.props.sites).toEqual(mockSites);
    } else {
      throw new Error('Expected result to have props, but it contains a redirect');
    }
  });

  it('affiche un message d\'erreur si getServerSideProps échoue', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch'));

    const result = await getServerSideProps({});

    if ('props' in result) {
      expect(result.props.newsletters).toEqual([]);
      expect(result.props.sites).toEqual([]);
    } else {
      throw new Error('Expected result to have props, but it contains a redirect');
    }
  });
});
