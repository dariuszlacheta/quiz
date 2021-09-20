import React from 'react';
import { render as rtlRender } from '@testing-library/react';

import Modal from './Modal';

const render = (overProps: any = {}) => {
  const props = {
    onClick: jest.fn(),
    ...overProps,
  };

  const wrapper = rtlRender(<Modal {...props} />);

  return {
    props,
    wrapper,
  };
};

test('should render children correctly', () => {
  const children = <span>children</span>;
  const {
    wrapper: { getByText },
  } = render({ children });

  expect(getByText('children')).toBeInTheDocument();
});
