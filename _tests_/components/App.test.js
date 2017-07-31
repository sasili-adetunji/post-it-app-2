import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import App from '../../client/components';
import Nav from '../../client/components/Nav';

describe(' Test for App Component', () => {
  it('renders the app components', () => {
    shallow(<App />);
  });

  it('renders Navigation bar components', () => {
    const wrapper = shallow(<App />);
    const navbar = <Nav />;
    expect(wrapper.contains(navbar)).toEqual(true);
  });
});
