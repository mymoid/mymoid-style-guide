import React from 'react';
import Index from './index';
import ReactTestRenderer from 'react-test-renderer';

describe('<Index />', () => {
  it('should render Attached label', () => {
    const renderer = ReactTestRenderer.create(<Index />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
  it('should render above', () => {
    const renderer = ReactTestRenderer.create(<Index above />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
  it('should render below', () => {
    const renderer = ReactTestRenderer.create(<Index />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
