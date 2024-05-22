import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sobre from '../JS/Sobre';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

test('renders Home component', () => {
  render(
    <Router>
        <Sobre />
    </Router>
  );
  
  expect(screen.getByText(/Nosso Objetivo/i)).toBeInTheDocument();
});