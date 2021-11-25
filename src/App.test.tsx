import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Teste para checar se há imagens na Home
test('renders images', () => {
  render(<App />);
  
  const imageElement = screen.getByAltText(/imagem/i);
  expect(imageElement).toBeInTheDocument();
});
