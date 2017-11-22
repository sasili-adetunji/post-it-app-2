import React from 'react';
import { mount } from 'enzyme';
import Message from '../../components/protected/Message.jsx';


require('../setup');

describe('Message', () => {
  let props;
  let mountedComponent;
  const message = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <Message {...props} />
      );
    }
    return mountedComponent;
  };
  it('always renders a div', () => {
    const divs = message().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
  describe('the rendered div', () => {
    it('contains everything else that gets rendered', () => {
      const divs = message().find('div');
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(message().children());
    });
    it('should recieve props', () => {
      expect(Object.keys(message().props()).length).toBeGreaterThan(0);
    });
  });
});
