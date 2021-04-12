import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

import Component from './Nav.jsx';


describe('Test Nav', () => {
  it('Test Toggle Click', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<Component toggleMenu={mockCallBack}/>));
    button.find('#nav-menu-toggler').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('Test Link Hrefs', () => {
    const rendered = render(<Component />);
    expect(rendered.getByText(/Home/i)).toHaveAttribute('href', '/');
    expect(rendered.getByText(/All Articles/i)).toHaveAttribute('href', '/articles');
    expect(rendered.getByText(/Favoured Articles/i)).toHaveAttribute('href', '/favoured-articles');
  });
});

