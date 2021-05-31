import { render, screen, renderer } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';


test('matches the snapshot', () => {
  render(<App />);

});
