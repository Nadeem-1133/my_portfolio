import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders NK Build Studio brand', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/NK Build Studio/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('service cards carry the selected service into both contact actions', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Discuss QA Testing' }));
  const email = new URL(screen.getByRole('link', { name: 'Send an email' }).href);
  expect(email.searchParams.get('su')).toContain('QA Testing');
  expect(email.searchParams.get('body')).toContain('QA Testing');
  const whatsapp = new URL(screen.getByRole('link', { name: 'Chat on WhatsApp' }).href);
  expect(whatsapp.searchParams.get('text')).toContain('QA Testing');

  fireEvent.click(screen.getByRole('link', { name: 'Discuss Mobile App Development' }));
  expect(new URL(screen.getByRole('link', { name: 'Send an email' }).href).searchParams.get('su')).toContain('Mobile App Development');
});
