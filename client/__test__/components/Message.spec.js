import React from 'react';
import { shallow, render } from 'enzyme';
import Message from '../../components/protected/Message.jsx';


function setup() {
  const props = {
    componentDidMount: () => {},
  };
  const message = {
    messageText: 'sasil',
    date: '',
    status: 'Read',
    author: 'Wash',
  };
  return shallow(<Message {...props} message={message} />);
}

describe('User components', () => {
  const message = {
    messageText: 'sasil',
    date: '',
    status: 'Read',
    author: 'Wash',
  };
  const component = setup();
  it('should match snapshot test', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain four div', () => {
    expect(component.find('div').length).toEqual(4);
  });
  it('should recieve props', () => {
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
  it('should render without throwing an error', () => {
    expect(component.contains(message.messageText)).toBe(true);
  });
});

describe('Message  Test', () => {
  it('should take props', () => {
    const component = setup();
    expect(component.props().componentDidMount).toExist;
  });
});
