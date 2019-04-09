import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library';

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

  // it('changes Balls', () => {});
});
