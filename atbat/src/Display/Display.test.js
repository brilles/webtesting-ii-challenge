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

  // Outs
  it('renders outs', () => {
    const { getByText } = render(<Display outsCount="0" />);

    getByText(/Outs: 0/i);
  });
  it('renders outs', () => {
    const { getByText } = render(<Display outsCount="1" />);

    getByText(/Outs: 1/i);
  });
  it('renders outs', () => {
    const { getByText } = render(<Display outsCount="2" />);

    getByText(/Outs: 2/i);
  });

  it('renders hits', () => {
    const { getByText } = render(<Display hitCount="0" />);

    getByText(/Hits: 0/i);
  });
  it('renders hits', () => {
    const { getByText } = render(<Display hitCount="1" />);

    getByText(/Hits: 1/i);
  });
  it('renders hits', () => {
    const { getByText } = render(<Display hitCount="2" />);

    getByText(/Hits: 2/i);
  });

  it('reset changes all values to 0', () => {
    const { queryByText } = render(
      <Display ballCount="0" strikeCount="0" outsCount="0" hitCount="0" />
    );

    expect(queryByText(/Strikes: 0/i)).not.toBeNull();
    expect(queryByText(/Balls: 0/i)).not.toBeNull();
    expect(queryByText(/Outs: 0/i)).not.toBeNull();
    expect(queryByText(/Hits: 0/i)).not.toBeNull();
  });
});
