import React from 'react';
import Display from './Display.js';
import { render } from 'react-testing-library';

describe('<Display /> ', () => {
  it('renders successfully', () => {
    render(<Display />);
  });

  it('renders Display', () => {
    const { queryByText } = render(<Display />);

    expect(queryByText(/Display/i)).not.toBeNull();
  });

  it('renders Strikes:', () => {
    const { queryByText } = render(<Display />);

    expect(queryByText(/Strikes:/i)).not.toBeNull();
  });

  it('renders Balls:', () => {
    const { queryByText } = render(<Display />);

    expect(queryByText(/Balls:/i)).not.toBeNull();
  });

  // Strikes
  it('renders strike count', () => {
    const { getByText } = render(<Display strikeCount="0" />);

    getByText(/Strikes: 0/i);
  });

  it('renders strike count', () => {
    const { getByText } = render(<Display strikeCount="1" />);

    getByText(/Strikes: 1/i);
  });

  it('renders strike count', () => {
    const { getByText } = render(<Display strikeCount="2" />);

    getByText(/Strikes: 2/i);
  });

  //Balls
  it('renders ball count', () => {
    const { getByText } = render(<Display ballCount="0" />);

    getByText(/Balls: 0/i);
  });
  it('renders ball count', () => {
    const { getByText } = render(<Display ballCount="1" />);

    getByText(/Balls: 1/i);
  });
  it('renders ball count', () => {
    const { getByText } = render(<Display ballCount="2" />);

    getByText(/Balls: 2/i);
  });
});
