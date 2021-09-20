import React from 'react';
import { render as rtlRender, fireEvent } from '@testing-library/react';

import Button from './Button';

const render = (overProps: any = {}) => {
  const props = {
    onClick: jest.fn(),
    ...overProps,
  };

  const wrapper = rtlRender(<Button {...props} />);

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

test('allows user to click the button ', () => {
  const children = <span>children</span>;
  const {
    wrapper: { getByText },
    props,
  } = render({ children });

  const button = getByText('children');
  fireEvent.click(button);

  expect(props.onClick).toHaveBeenCalled();
});
