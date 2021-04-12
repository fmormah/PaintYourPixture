import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

import Component from './HomeHero.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Check Home Hero Component', () => {

  test('Has side menu', () => {
    const testMenus = [
      <a className="home-hero-side-bar-item" key={0} href="#someDiv">Test link</a>
    ];
    const rendered = render(<Component sideMenuItems={testMenus} />);
    expect(rendered.getByText(/Test link/i)).toHaveAttribute('href', '#someDiv');
  });
  
  test('Passing children', () => {
    const rendered = render(
      <Component>
        <p>I am some test copy</p>
      </Component>
    );
    rendered.getByText(/some test/i);
  });
});
