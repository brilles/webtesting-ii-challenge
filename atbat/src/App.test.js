import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library';
import Display from './Display/Display.js';

describe('<App/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders successfully', () => {
    render(<App />);
  });

  it('renders At bat', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/At bat/i)).not.toBeNull();
  });

  it('reset changes values', () => {
    const { getByText } = render(<App />);
    const button = getByText(/reset/i);
    fireEvent.click(button);
    getByText(/Strikes: 0/i);
    getByText(/Balls: 0/i);
    getByText(/Outs: 0/i);
    getByText(/Hits: 0/i);
  });
});
