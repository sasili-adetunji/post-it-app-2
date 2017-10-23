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

  it('should match snapshot test', () => {
    const component = shallow(<Message message={message} />);
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    const component = shallow(<Message message={message} />);
    expect(component).toBeDefined();
  });
  it('Should contain four div', () => {
    const component = shallow(<Message message={message} />);
    expect(component.find('div').length).toEqual(4);
  });
  it('should recieve props', () => {
    const component = shallow(<Message message={message} />);
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
  it('should render without throwing an error', () => {
    const component = shallow(<Message message={message} />);
    expect(component.contains(message.messageText)).toBe(true);
  });
});

describe('Message  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().componentDidMount).toExist;
  });
});
