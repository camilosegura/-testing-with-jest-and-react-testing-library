// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import ReactDOM from 'react-dom';
import App from './App';

const root = document.createElement('div');

test('should have text', () => {
  ReactDOM.render(<App />, root);

  expect(root.innerHTML.search(/learn react/gi) > -1).toBe(true);

  root.querySelector('button').click();
  // const shown = root.querySelector('#shown')
  // console.log(shown.textContent)
  // expect(shown).toHaveTextContent('Hello World!!')
})