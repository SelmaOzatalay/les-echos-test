import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewsletterListItemButton from './NewsletterListItemButton';

jest.mock('./newsletterListItemButton.module.scss', () => ({
  newsletterListItemButton: 'newsletterListItemButton',
  inscriptionButton: 'inscriptionButton',
  subscriptionButton: 'subscriptionButton',
}));

describe('NewsletterListItemButton', () => {
  it('affiche "S\'inscrire" et applique la classe correcte quand userCanSubscribe est true', () => {
    render(<NewsletterListItemButton userCanSubscribe={true} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent("S'inscrire");

    expect(button).toHaveClass('inscriptionButton');
  });

  it('affiche "S\'abonner" et applique la classe correcte quand userCanSubscribe est false', () => {
    render(<NewsletterListItemButton userCanSubscribe={false} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent("S'abonner");

    expect(button).toHaveClass('subscriptionButton');
  });

  it('applique les classes de base même si userCanSubscribe est indéfini', () => {
    render(<NewsletterListItemButton />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent("S'abonner");

    expect(button).toHaveClass('subscriptionButton');
  });
});
