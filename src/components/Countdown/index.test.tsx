import React from 'react';

import { render } from '@test/testUtils';
import Countdown from '.';

describe('Countdown', () => {
  it('Should render', () => {
    const { getByText } = render(<Countdown />);

    expect(getByText('Hello')).toBeInTheDocument();
  });
});
