import React from "react";
import { mount } from "enzyme";
import PostItActions from '../../actions/PostItActions';
import CreateGroup from '../../components/protected/CreateGroup.jsx';


import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = jsdom;
global.window = window;
global.document = window.document;


describe("AddMember", () => {
  let props;
  let mountedComponent;
  const createGroup = () => {
    if (!mountedComponent) {
      mountedMessageBoard = mount(
        <CreateGroup {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    props = {
      userName: {displayName: "Adetunji"},
       onClick: () => {},
      onChange: () => {},
    };
    mountedComponent = mount(
        <CreateGroup {...props} />
      );
  });
  it("always renders a div", () => {
  const divs = createGroup().find("div");
  expect(divs.length).toBeGreaterThan(0);
});
describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = createGroup().find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(createGroup().children());
  });
   it('should have an empty initial state', () => {
    expect(mountedComponent.state().groupName).toEqual('');
  });
    it('should have all the method defined', () => {
    expect(mountedComponent.node.onChange).toBeDefined();
    expect(mountedComponent.node.onClick).toBeDefined();
  });
    it('should call function on submit of form', () => {
    const preventDefault = jest.fn();
    createGroup().find('button').simulate('click', { preventDefault });
    expect(preventDefault).toBeCalled();
  });
  it('should update addmember state on  change', () => {
    createGroup().find('input').simulate('change', { target: {
      value: 'programmer'
    } });
    expect(createGroup().state().groupName).toEqual('programmer');
  });
  it('should change state when button is click', () => {
    const preventDefault = jest.fn();
    createGroup().find('button').simulate('click', { preventDefault });
    const postMessageSpy = jest.spyOn(PostItActions, 'createGroup');
    expect(postMessageSpy).toBeCalled;
  });
  });
});
