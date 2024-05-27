import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loja from '../JS/Loja';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

test('renders Home component', () => {
  render(
    <Router>
        <Loja />
    </Router>
  );
  expect(screen.getByText(/Painel de Exposições/i)).toBeInTheDocument();
});