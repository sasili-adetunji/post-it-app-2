import PostItConstants from '../../constants/PostItConstants';


const mockData = {
  searchedUsers: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.SEARCH_USERS,
      payload: {
        usersDetails: [
          { userId: 'AKFnhd92XHNvMGHmUSHJ2CGt1Au1',
            userNames: 'West' }
        ]
      }
    }
  },

  addMember: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.ADDUSER_GROUP,
      user: {
        userId: '44JKLSK.5H049',
        groupId: 'JKV.L;/SJFKHE487Y8T ',
        userName: 'wash',
      }
    }
  },

  addMessage: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.ADD_MESSAGE,
      message: {
        groupId: 'KJJH772SLJKHDLAI8',
        message: 'HOW U DEY?',
        priorityLevel: 'normal',
        date: '17th Nov, 2017',
      }
    }
  },

  usersInGroups: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RECIEVE_USERS_IN_GROUPS,
      group: {
        groupId: 'KJJH772SLJKHDLAI8',
      }
    }
  },

  userGroups: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RECEIVE_USER_GROUPS,
      group: {
        groupId: 'KJJH772SLJKHDLAI8',
      }
    }
  },

  resetPassword: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RESET_PASSWORD,
      email: {
        email: 'sas@gmail.com'
      }
    }
  },

  usersList: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RECEIVE_USERS,
      users: [
      { userId: 'KJJH772SLJKHDLAI8', userName: 'wash' },
      { userId: 'N.SLJLPWE84UHN', userName: 'sas' },
      ]
    }
  }
};

export default mockData;
