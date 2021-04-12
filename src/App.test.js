import '../test-helper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import App from './App.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
