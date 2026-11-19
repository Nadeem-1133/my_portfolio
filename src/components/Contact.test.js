import { render, screen } from '@testing-library/react';
import Contact from './Contact';

const personalInfo = { name: 'NK Build Studio', founder: 'Nadeem Khan', email: 'nadeemzia52572@gmail.com', phone: '+92 3029661825', location: 'Timergara, Pakistan', linkedin: '#linkedin', github: '#github' };

test('offers direct contact links to the owner without a form', () => {
  const { container } = render(<Contact personalInfo={personalInfo} services={[]} selectedService={null} />);
  expect(container.querySelector('form, input, textarea, select')).toBeNull();
  const whatsapp = new URL(screen.getByRole('link', {name: 'Chat on WhatsApp'}).href);
  expect(whatsapp.origin).toBe('https://wa.me');
  expect(whatsapp.pathname).toBe('/923029661825');
  expect(whatsapp.searchParams.get('text')).toContain('discuss a project');
  const emailButton = screen.getByRole('link', {name: 'Send an email'});
  const gmail = new URL(emailButton.href);
  expect(gmail.origin).toBe('https://mail.google.com');
  expect(gmail.searchParams.get('view')).toBe('cm');
  expect(gmail.searchParams.get('to')).toBe('nadeemzia52572@gmail.com');
  expect(gmail.searchParams.get('body')).toContain('discuss a project');
  expect(emailButton).toHaveAttribute('target', '_blank');
  expect(emailButton).toHaveAttribute('rel', 'noopener noreferrer');
  expect(screen.queryByRole('link', {name: 'Open in Gmail'})).not.toBeInTheDocument();
});
