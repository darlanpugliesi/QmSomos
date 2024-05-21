import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../JS/footer';
import '@testing-library/jest-dom/extend-expect';

test('renders Footer component', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  expect(screen.getByRole('heading', { name: /Woman Space/i })).toBeInTheDocument();

  expect(screen.getByText(/Woman Space é uma plataforma digital que visa dar destaque à arte feminina/i)).toBeInTheDocument();

  expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Loja/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Sobre/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Comunidade/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Suporte/i })).toBeInTheDocument();

  expect(screen.getByTestId('facebook-link')).toBeInTheDocument();
  expect(screen.getByTestId('twitter-link')).toBeInTheDocument();
  expect(screen.getByTestId('instagram-link')).toBeInTheDocument();
  expect(screen.getByTestId('linkedin-link')).toBeInTheDocument();

  expect(screen.getByText(/© 2024 Woman Space. Todos os direitos reservados./i)).toBeInTheDocument();
});

test('social media links have correct href', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  expect(screen.getByTestId('facebook-link')).toHaveAttribute('href', 'https://facebook.com');
  expect(screen.getByTestId('twitter-link')).toHaveAttribute('href', 'https://twitter.com');
  expect(screen.getByTestId('instagram-link')).toHaveAttribute('href', 'https://instagram.com');
  expect(screen.getByTestId('linkedin-link')).toHaveAttribute('href', 'https://linkedin.com');
});
