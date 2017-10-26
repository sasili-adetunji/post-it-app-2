import React from 'react';
import { shallow, render } from 'enzyme';
import MessageBoard from '../../components/protected/MessageBoard.jsx';
import DashboardNav from '../../components/protected/DashboardNav.jsx';
import MessageList from '../../components/protected/MessageList.jsx';
import PostItStore from '../../stores/PostItStore';
import PostItDispatcher from '../../dispatcher/PostItDispatcher';


function setup() {
  const props = {
    onChange: () => {},
    componentDidMount: () => {},
    componentWillUnmount: () => {},
  };
  return shallow(<MessageBoard {...props} />);
}

describe(' Test for MessageBoard Component', () => {
  const component = setup();
  // const spyOnDispatcher = jest.spyOn(PostItDispatcher, 'componentDidMount');

  it('renders without crashing', () => {
    shallow(<MessageBoard />);
  });
  it('renders Dashboad Navigation', () => {
    expect(component.find('DashboardNav').length).toEqual(1);
  });
  it('renders MessageList components', () => {
    expect(component.find('MessageList').length).toEqual(1);
  });
  // it('renders MessageList components', () => {
  //   shallow(<MessageBoard />);
  //   expect(spyOnDispatcher).toHaveBeenCalled();
  // });
});


describe('MessageBoard  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().componentDidMount).toExist;
    expect(wrapper.props().componentWillUnmount).toExist;
  });
});
