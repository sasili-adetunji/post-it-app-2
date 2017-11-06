import React from "react";
import { mount } from "enzyme";
import MessageBoard from '../../components/protected/MessageBoard.jsx';
import DashboardNav from '../../components/protected/DashboardNav.jsx';
import MessageList from '../../components/protected/MessageList.jsx';

import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = jsdom;
global.window = window;
global.document = window.document;


describe("MessageBoard", () => {
  let props;
  let mountedMessageBoard;
  const messageBoard = () => {
    if (!mountedMessageBoard) {
      mountedMessageBoard = mount(
        <MessageBoard {...props} />
      );
    }
    return mountedMessageBoard;
  }

  beforeEach(() => {
    props = {
      loggedInUser: {
        name: 'Sasil',
        email: 'sasil@gmail.com'
      },
      selectedGroup: {
        groupId: 'JDUD72957SJopd93'
      },
      user: {
        userName: 'sasil',
        email: 'adeola@gmail.com'
      },
      usernames: {
        userName: 'sasil'
      },
      userName: undefined,
      readUsers: undefined,
      message: undefined,
    };
    mountedMessageBoard = mount(
        <MessageBoard {...props} />
      );
  });
  it("always renders a div", () => {
  const divs = messageBoard().find("div");
  expect(divs.length).toBeGreaterThan(0);
});
describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = messageBoard().find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(messageBoard().children());
  });
  it("always renders a `DashboardNav`", () => {
  expect(messageBoard().find(DashboardNav).length).toBe(1);
});
  it("always renders a `MessageList`", () => {
  expect(messageBoard().find(MessageList).length).toBe(1);
});
});
describe("rendered `DashboardNav`", () => {
  it("should receive five props", () => {
    const dashboardNavDisplay = messageBoard().find(DashboardNav);
    expect(Object.keys(dashboardNavDisplay.props()).length).toBe(5);
  });
  it("should contain props", () => {
    const dashboardNavDisplay = messageBoard().find(DashboardNav);
    expect(dashboardNavDisplay.props().user).toEqual([])
    expect(dashboardNavDisplay.props().usernames).toEqual([])
    expect(dashboardNavDisplay.props().userName).toEqual([])
    expect(dashboardNavDisplay.props().selectedGroup).toEqual([])
    expect(dashboardNavDisplay.props().loggedInUser).toEqual([])
  });
});
describe("rendered `MessageList`", () => {
  const messageListDisplay = messageBoard().find(MessageList);
  it("should receive four props", () => {
    expect(Object.keys(messageListDisplay.props()).length).toBe(4);
  });
  it("should contain props", () => {
    expect(messageListDisplay.props().loggedInUser).toEqual([]);
    expect(messageListDisplay.props().readUsers).toEqual([]);
    expect(messageListDisplay.props().message).toEqual([]);
    expect(messageListDisplay.props().selectedGroup).toEqual([]);
  });
});
});
