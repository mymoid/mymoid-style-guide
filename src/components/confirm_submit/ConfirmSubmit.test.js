import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ConfirmSubmit from './ConfirmSubmit';

describe('<ConfirmSubmit />', () => {
  xit('should render a Confirm Submit component', () => {
    const renderer = ReactTestRenderer.create(<ConfirmSubmit />);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
