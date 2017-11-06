import React from "react";
import { mount } from "enzyme";
import PostItActions from '../../actions/PostItActions';
import Message from '../../components/protected/Message.jsx';


import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = jsdom;
global.window = window;
global.document = window.document;


describe("Message", () => {
  let props;
  let mountedComponent;
  const message = () => {
    if (!mountedComponent) {
      mountedMessageBoard = mount(
        <Message {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    props = {
      message: {
    messageText: 'sasil',
    date: '',
    status: 'Read',
    author: 'Wash',
    },
  readUser: ['sasil', 'qudus']   
  };
    mountedComponent = mount(
        <Message {...props} />
      );
  });
  it("always renders a div", () => {
  const divs = message().find("div");
  expect(divs.length).toBeGreaterThan(0);
});
describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = message().find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(message().children());
  });
  it('should recieve props', () => {
    expect(Object.keys(message().props()).length).toBeGreaterThan(0);
  });
  });
});
