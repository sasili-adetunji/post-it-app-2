import React from 'react';
import { mount } from 'enzyme';
import NavBar from '../../components/NavBar.jsx';

require('../setup');

jest.mock('../../actions/AppActions');

describe('NavBar', () => {
  const wrapper = mount(<NavBar />);
  let props;
  let mountedComponent;
  const navbar = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <NavBar {...props} />
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = mount(
      <NavBar {...props} />
      );
  });
  it('should always render', () => {
    expect(navbar()).toBeDefined();
  });
  it('always renders a div', () => {
    const divs = navbar().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
