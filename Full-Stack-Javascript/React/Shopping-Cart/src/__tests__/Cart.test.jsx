import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../pages/Cart';

const mockItems = [
  { id: 1, title: 'Product A', price: 10.00, image: 'img1.jpg', quantity: 2 },
  { id: 2, title: 'Product B', price: 25.50, image: 'img2.jpg', quantity: 1 },
];

const renderCart = (items = [], onUpdateQty = () => {}, onRemove = () => {}) => {
  return render(
    <MemoryRouter>
      <Cart cartItems={items} onUpdateQty={onUpdateQty} onRemove={onRemove} />
    </MemoryRouter>
  );
};

describe('Cart', () => {

  test('shows empty state when cart is empty', () => {
    renderCart([]);
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.getByText(/browse products/i)).toBeInTheDocument();
  });

  test('renders all cart items', () => {
    renderCart(mockItems);
    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
  });

  test('calls onRemove when remove button clicked', async () => {
    const user = userEvent.setup();
    const mockRemove = vi.fn();
    renderCart(mockItems, () => {}, mockRemove);

    // Klik tombol remove untuk item pertama
    const removeBtns = screen.getAllByLabelText(/remove/i);
    await user.click(removeBtns[0]);

    expect(mockRemove).toHaveBeenCalledWith(1); // id produk pertama
  });

  test('calls onUpdateQty when + button clicked', async () => {
    const user = userEvent.setup();
    const mockUpdateQty = vi.fn();
    renderCart(mockItems, mockUpdateQty);

    const incrementBtns = screen.getAllByLabelText(/increase quantity/i);
    await user.click(incrementBtns[0]);

    // quantity 2 + 1 = 3
    expect(mockUpdateQty).toHaveBeenCalledWith(1, 3);
  });

});
