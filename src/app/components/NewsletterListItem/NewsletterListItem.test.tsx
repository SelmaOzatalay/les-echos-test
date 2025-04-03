// NewsletterListItem.test.tsx
import { render, screen } from '@testing-library/react';
import NewsletterListItem from './NewsletterListItem';
import '@testing-library/jest-dom'; // Import des matchers jest-dom
import { Newsletter } from '../../types';

// Mock des composants externes et des styles
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, src }: { alt: string, src: string }) => <img alt={alt} src={src} />
}));

jest.mock('../NewsletterListItemButton/NewsletterListItemButton', () => ({
  __esModule: true,
  default: ({ userCanSubscribe }: { userCanSubscribe?: boolean }) => (
    <button>{userCanSubscribe ? "S'inscrire" : "S'abonner"}</button>
  )
}));

jest.mock('./newsletterListItem.module.scss', () => ({
  newsletterListItem: 'newsletterListItem',
  newsletterListItemTopContainer: 'newsletterListItemTopContainer',
}));

describe('NewsletterListItem', () => {
  // Mock de l'objet Newsletter que tu as fourni
  const mockItem: Newsletter = {
    id: "000000000000000000000000",
    image: "https://placehold.co/200",
    description: "Dive into the unknown with this week's spotlight!",
    title: "Weekly Wonders",
    site: "DEN",
    subscriptions: ["RIGHT_1"],
  };

  it('rend correctement un article de newsletter avec les informations fournies', () => {
    render(<NewsletterListItem item={mockItem} />);

    const image = screen.getByAltText(mockItem.title);
    expect(image).toHaveAttribute('src', mockItem.image);
    expect(image).toHaveAttribute('alt', mockItem.title);

    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent(mockItem.title);

    const description = screen.getByText(mockItem.description);
    expect(description).toBeInTheDocument();
  });

  it('affiche le bouton "S\'inscrire" quand userCanSubscribe est true', () => {
    render(<NewsletterListItem item={mockItem} userCanSubscribe={true} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent("S'inscrire");
  });

  it('affiche le bouton "S\'abonner" quand userCanSubscribe est false', () => {
    render(<NewsletterListItem item={mockItem} userCanSubscribe={false} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent("S'abonner");
  });

  it('affiche le bouton "S\'abonner" par défaut quand userCanSubscribe est indéfini', () => {
    render(<NewsletterListItem item={mockItem} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent("S'abonner");
  });
});
