import '../../../test-helper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

import Component from './Home.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Check Hero as rendered', () => {
  const rendered = render(<Component />);
  rendered.getByText(/Humble Beginnings/i);
});