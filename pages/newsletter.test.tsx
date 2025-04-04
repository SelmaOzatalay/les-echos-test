import { render, screen } from '@testing-library/react';
import NewsletterPage, { getServerSideProps } from '../pages/newsletter';
import '@testing-library/jest-dom';
import { GetServerSidePropsContext } from 'next';


const mockContext = {
  req: {} as any,
  res: {} as any,
  query: {},
  resolvedUrl: 'api/newsletter',
} as unknown as GetServerSidePropsContext;

const mockNewsletters = [
  {
    id: "000000000000000000000000",
    image: "https://picsum.photos/200",
    description: "Dive into the unknown with this week's spotlight!",
    title: "Weekly Wonders",
    site: "DEN",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000001",
    image: "https://picsum.photos/200",
    description: "Kickstart your week with a burst of inspiration.",
    title: "Marvelous Mondays",
    site: "DAN",
    subscriptions: ["RIGHT_1"],
  },
];
const mockSites = ["DEN","DAN","LAN","SAN"];


describe('NewsletterPage', () => {

  it('rend correctement la page de newsletters', async () => {


    render(<NewsletterPage newsletters={mockNewsletters} sites={mockSites} />);

    expect(screen.getByText('Weekly Wonders')).toBeInTheDocument();
    expect(screen.getByText('Marvelous Mondays')).toBeInTheDocument();

  });

  it('effectue correctement l’appel à getServerSideProps', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: jest.fn().mockResolvedValue(mockNewsletters),
    });
    

    const result = await getServerSideProps(mockContext);

    if ('props' in result && 'newsletters' in result.props) {
      expect(result.props.newsletters).toHaveLength(2);
      expect(result.props.sites).toEqual(mockSites);
    } else {
      throw new Error('Expected result to have props, but it contains a redirect');
    }
  });

  it('affiche un message d\'erreur si getServerSideProps échoue', async () => {

    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch'));
    

    const result = await getServerSideProps(mockContext);

    if ('props' in result && 'newsletters' in result.props) {
      expect(result.props.newsletters).toEqual([]);
      expect(result.props.sites).toEqual([]);
    } else {
      throw new Error('Expected result to have props, but it contains a redirect');
    }
  });
});
