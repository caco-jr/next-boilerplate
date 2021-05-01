import React from 'react';
import { render } from '@test/testUtils';

import Layout from '.';

describe('LayoutComponent', () => {
  it('Should have main tag', () => {
    const { container } = render(<Layout title="Layout Testing" />);

    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('Should have defaultProps for "title"', () => {
    expect(Layout.defaultProps?.title).toBeDefined();
  });

  it('Should render children content', () => {
    const text = 'Hello world!';

    const { getByText } = render(
      <Layout>
        <h1>{text}</h1>
      </Layout>
    );

    expect(getByText(text)).toBeInTheDocument();
  });
});
