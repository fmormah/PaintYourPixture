import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

import Component from './ArticleCard.jsx';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Test Check Card elements', () => {
  test('Has side menu', () => {
    const rendered = render(<Component header="Header Test" mainCopy="Copy Test" />);
    expect(rendered.getByText(/Read more/i)).toHaveAttribute('aria-label', 'Full article link');
  });
  test('Check Hero as rendered', () => {
    const rendered = render(<Component header="Header Test" mainCopy="Copy Test" />);
    rendered.getByText(/Header Test/i);
    rendered.getByText(/Copy Test/i);
  });
  it('Test Toggle Click', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<Component header="Header Test" mainCopy="Copy Test" />));
    button.find('#js-like-btn').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});


