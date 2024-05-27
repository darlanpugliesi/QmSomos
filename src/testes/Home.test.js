import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../JS/Home.js';
import '@testing-library/jest-dom/extend-expect';

test('renders Home component', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  expect(screen.getByAltText(/mulher/i)).toBeInTheDocument();

  expect(screen.getByText(/Seu espaço para/i)).toBeInTheDocument();
  expect(screen.getByText(/explorar, criar e/i)).toBeInTheDocument();
  expect(screen.getByText(/compartilhar -/i)).toBeInTheDocument();
  expect(screen.getByText(/Woman Space./i)).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Cadastro/i })).toBeInTheDocument();
});
