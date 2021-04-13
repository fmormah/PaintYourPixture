import '../test-helper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import App from './App.jsx';

jest.mock('./data/articles.json');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App test={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

