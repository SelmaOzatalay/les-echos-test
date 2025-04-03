// NewsletterList.test.tsx
import { render, screen } from '@testing-library/react';
import NewsletterList from './NewsletterList';
import '@testing-library/jest-dom'; // Import des matchers jest-dom
import { Newsletter } from '../../types';

// Mock des composants externes et des styles
jest.mock('../NewsletterListItem/NewsletterListItem', () => ({
  __esModule: true,
  default: ({ item, userCanSubscribe }: { item: Newsletter, userCanSubscribe?: boolean }) => (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button>{userCanSubscribe ? "S'inscrire" : "S'abonner"}</button>
    </div>
  )
}));

jest.mock('./newsletterList.module.scss', () => ({
  newsletterList: 'newsletterList',
  newsletterListGrid: 'newsletterListGrid',
}));

describe('NewsletterList', () => {
  const mockNewsletters: Newsletter[] = [
    {
      id: "000000000000000000000001",
      image: "https://placehold.co/200",
      description: "First newsletter description",
      title: "First Newsletter",
      site: "DEN",
      subscriptions: ["RIGHT_1"],
      userCanSubscribe: true,
    },
    {
      id: "000000000000000000000002",
      image: "https://placehold.co/200",
      description: "Second newsletter description",
      title: "Second Newsletter",
      site: "DEN",
      subscriptions: ["RIGHT_1"],
      userCanSubscribe: false,
    },
  ];

  const mockSites = ["DEN", "FR"];

  it('rend correctement la liste des newsletters pour chaque site', () => {
    render(<NewsletterList newsletters={mockNewsletters} sites={mockSites} />);

    expect(screen.getByText('First Newsletter')).toBeInTheDocument();
    expect(screen.getByText('Second Newsletter')).toBeInTheDocument();

    expect(screen.getByText('First newsletter description')).toBeInTheDocument();
    expect(screen.getByText('Second newsletter description')).toBeInTheDocument();

    expect(screen.getByText("S'inscrire")).toBeInTheDocument();
    expect(screen.getByText("S'abonner")).toBeInTheDocument();
  });

  it('affiche un titre pour chaque site', () => {
    render(<NewsletterList newsletters={mockNewsletters} sites={mockSites} />);

    expect(screen.getByText('DEN')).toBeInTheDocument();
  });

  it('affiche un message "Aucun site trouvé" si aucun site n’est passé', () => {
    render(<NewsletterList newsletters={mockNewsletters} sites={[]} />);

    expect(screen.getByText('Aucun site trouvé.')).toBeInTheDocument();
  });

  it('affiche uniquement les newsletters correspondant au site sélectionné', () => {
    render(<NewsletterList newsletters={mockNewsletters} sites={["DEN"]} />);

    expect(screen.getByText('First Newsletter')).toBeInTheDocument();
    expect(screen.getByText('Second Newsletter')).toBeInTheDocument();
  });
});
