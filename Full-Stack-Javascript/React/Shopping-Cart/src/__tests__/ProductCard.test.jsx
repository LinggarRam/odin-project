import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  image: 'https://example.com/image.jpg',
  category: 'electronics',
  rating: { rate: 4.5, count: 120 },
};

describe('ProductCard', () => {

  test('renders product title and price', () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });

  test('renders product image with correct alt text', () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });

  test('default quantity is 1', () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);
    expect(screen.getByRole('spinbutton', { name: /quantity/i })).toHaveValue(1);
  });

  test('increment button increases quantity', async () => {
    const user = userEvent.setup();
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    const incrementBtn = screen.getByLabelText(/increase quantity/i);
    await user.click(incrementBtn);

    expect(screen.getByRole('spinbutton', { name: /quantity/i })).toHaveValue(2);
  });

  test('decrement button decreases quantity but not below 1', async () => {
    const user = userEvent.setup();
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    const decrementBtn = screen.getByLabelText(/decrease quantity/i);
    // Klik decrement saat qty = 1, harusnya tetap 1
    await user.click(decrementBtn);

    expect(screen.getByRole('spinbutton', { name: /quantity/i })).toHaveValue(1);
  });

  test('calls onAddToCart with correct args when button clicked', async () => {
    const user = userEvent.setup();
    const mockAddToCart = vi.fn();
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    // Increment dulu ke 3
    const incrementBtn = screen.getByLabelText(/increase quantity/i);
    await user.click(incrementBtn);
    await user.click(incrementBtn);

    await user.click(screen.getByText(/add to cart/i));

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct, 3);
  });

  test('resets quantity to 1 after adding to cart', async () => {
    const user = userEvent.setup();
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    const incrementBtn = screen.getByLabelText(/increase quantity/i);
    await user.click(incrementBtn); // qty = 2

    await user.click(screen.getByText(/add to cart/i));

    expect(screen.getByRole('spinbutton', { name: /quantity/i })).toHaveValue(1);
  });

});