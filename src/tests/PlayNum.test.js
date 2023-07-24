import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PlayNum from '../components/PlayNum';

test('renders without errors', () => {
  render(<PlayNum />);
});

test('Number click - available case', () =>{
    const numberClick = jest.fn();

    const { getByText } = render(<PlayNum number = {3} status = "available" onClick = {numberClick} />);

    const numberToClick = getByText('3');
    fireEvent.click(numberToClick);
    
    expect(numberClick).toHaveBeenCalledTimes(1);
    expect(numberClick).toHaveBeenLastCalledWith(3, 'available');

    expect(getComputedStyle(numberToClick).backgroundColor).toBe('lightgray');
})

test('Number click - used case', () => {
    const numberClick = jest.fn();
  
    const { getByText } = render(<PlayNum number={4} status="used" onClick={numberClick} />);
  
    const numberUsedButton = getByText('4');
    expect(numberUsedButton).toHaveClass('numberUsed');

    expect(getComputedStyle(numberUsedButton).backgroundColor).toBe('lightgreen');
  });
  
  
