import React from 'react';
import { render } from '@testing-library/react';
import utils from '../components/Utils';
import Star from '../components/Star';

test('renders without errors', () => {
  render(<Star range={utils.range} count={9} />);
});

test('9 stars', () =>{
    const numOfStars = 9;
    const { container } = render(<Star range={utils.range} count={numOfStars}/>);
    const stars = container.querySelectorAll('.star');
    expect(stars.length).toBe(numOfStars);
})
