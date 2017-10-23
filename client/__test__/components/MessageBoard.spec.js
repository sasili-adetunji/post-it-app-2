import React from 'react';
import { shallow, render } from 'enzyme';
import MessageBoard from '../../components/protected/MessageBoard.jsx';
import DashboardNav from '../../components/protected/DashboardNav.jsx';
import MessageList from '../../components/protected/MessageList.jsx';


function setup() {
  const props = {
    onChange: () => {},
    componentDidMount: () => {},
    componentWillUnmount: () => {}

  };
  return shallow(<MessageBoard {...props} />);
}

describe(' Test for MessageBoard Component', () => {
  it('renders without crashing', () => {
    shallow(<MessageBoard />);
  });

  it('renders Dashboad Navigation', () => {
    const wrapper = shallow(<MessageBoard />);
    expect(wrapper.find('DashboardNav').length).toEqual(1)
  });
  it('renders MessageList components', () => {
    const wrapper = shallow(<MessageBoard />);
    expect(wrapper.find('MessageList').length).toEqual(1)
  });
});


describe('MessageBoard  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().componentDidMount).toExist;
    expect(wrapper.props().componentWillUnmount).toExist;
  });
});
