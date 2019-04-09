import React from 'react';
import Dashboard from './Dashboard.js';
import { render } from 'react-testing-library';

describe('<Dashboard /> ', () => {
  it('renders successfully', () => {
    render(<Dashboard />);
  });

  it('renders Dashboard', () => {
    const { queryByText } = render(<Dashboard />);

    expect(queryByText(/Dashboard/i)).not.toBeNull();
  });
});
