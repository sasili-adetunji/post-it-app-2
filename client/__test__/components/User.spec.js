import React from 'react';
import { shallow } from 'enzyme';
import User from '../../components/protected/User.jsx';

describe('User components', () => {
  const user = {
    userName: 'sasil',
    email: 'sasil@yahoo.com',
    id: 'UTsUlauteS5nb34huOP6SpvcuocX9vA1',
  };

  const component = shallow(<User user={user} />);
  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain one div', () => {
    expect(component.find('div').length).toEqual(1);
  });
  it('should recieve props', () => {
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
  it('should render without throwing an error', () => {
    expect(component.contains(user.userName)).toBe(true);
  });
  it('should find all component rendered element', () => {
    expect(component.find('li').length).toBe(1);
    expect(component.find('span').length).toBe(1);
  });
});
