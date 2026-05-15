import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const renderNavbar = (totalItems = 0) => {
  return render(
    <MemoryRouter>
      <Navbar totalItems={totalItems} />
    </MemoryRouter>
  );
};

describe('Navbar', () => {

  test('renders brand name', () => {
    renderNavbar();
    expect(screen.getByText(/ShopReact/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Shop$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Cart/i })).toBeInTheDocument();
  });

  test('does NOT show badge when cart is empty', () => {
    renderNavbar(0);
    expect(screen.queryByLabelText(/items in cart/i)).not.toBeInTheDocument();
  });

  test('shows badge with correct count when cart has items', () => {
    renderNavbar(5);
    expect(screen.getByLabelText(/5 items in cart/i)).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('shows 99+ when cart has more than 99 items', () => {
    renderNavbar(150);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

});
