import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StarMatch from '../components/StarMatch';

test('renders without errors', () => {
  render(<StarMatch />);

});
