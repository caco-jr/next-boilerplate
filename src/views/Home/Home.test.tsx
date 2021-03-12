import { render } from '@test/testUtils';

import Home from './Home';

describe('Home', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Home />);

    expect(getByRole('heading', { name: /Hello World/i })).toBeInTheDocument();
  });
});
