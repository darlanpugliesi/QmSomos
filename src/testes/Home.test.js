import React from 'react';
import { render } from '@testing-library/react';
import Texto1 from '../JS/Texto1';
import Imagem from '../JS/Imagem';

test('renders text correctly', () => {
    const { getByText } = render(<Texto1 />);
    const textElement1 = getByText('Seu espaço para');
    const textElement2 = getByText('explorar, criar e');
    const textElement3 = getByText('compartilhar -');
    const textElement4 = getByText('Woman Space.');
    
    expect(textElement1).toBeInTheDocument();''
    expect(textElement2).toBeInTheDocument();
    expect(textElement3).toBeInTheDocument();
    expect(textElement4).toBeInTheDocument();
});


test('renders image correctly', () => {
  
  const { getByAltText } = render(<Imagem  />);
  const imageElement = getByAltText('mulher');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', '../JS/');
});
