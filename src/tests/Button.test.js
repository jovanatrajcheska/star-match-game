import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '../components/Button';

test('renders without errors', () => {
  render(<Button />);
});

test('clickFunc on click', () =>{
  const clickFunc = jest.fn();
  const content = 'Test';
  const {getByText} = render(<Button onClick={clickFunc}>{content}</Button>);
  const button = getByText(content);

  fireEvent.click(button);
  expect(clickFunc).toHaveBeenCalled();
})