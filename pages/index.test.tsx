import { render, screen } from '@testing-library/react';
import Home, { getServerSideProps } from '../pages/index';
import '@testing-library/jest-dom';

describe('Page index.tsx', () => {
  it('ne rend rien (return null)', () => {
    const { container } = render(<Home />);
    expect(container).toBeEmptyDOMElement();
  });

  it('redirige vers /newsletter via getServerSideProps', async () => {
    const result = await getServerSideProps({} as any);

    expect('redirect' in result).toBe(true);
    if ('redirect' in result) {
      expect(result.redirect?.destination).toBe('/newsletter');
      expect(result.redirect?.permanent).toBe(false);
    }
  });
});
