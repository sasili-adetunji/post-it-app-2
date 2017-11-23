import AppConstants from '../../constants/AppConstants';


const mockData = {
  searchedUsersAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.SEARCH_USERS,
      payload: {
        user: {
          userNames: 'w' }
      }
    }
  },

  creategroupActions: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.RECIEVE_CREATE_GROUP,
      group: {
        groupName: 'West'
      }
    }
  },

  addMemberAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.ADDUSER_GROUP,
      user: {
        userId: '44JKLSK.5H049',
        groupId: 'JKV.L;/SJFKHE487Y8T ',
        userName: 'wash',
      }
    }
  },

  addMessageAction: {
    action: {
      actionType: AppConstants.ADD_MESSAGE,
      message: {
        groupId: 'KJJH772SLJKHDLAI8',
        message: 'HOW U DEY?',
        priorityLevel: 'normal',
        date: '17th Nov, 2017',
      }
    }
  },

  signOutAction: {
    action: {
      actionType: AppConstants.SIGNOUT_USER,
    }
  },

  usersInGroupsAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.RECIEVE_USERS_IN_GROUPS,
      group: {
        groupId: 'GKLQMLSDF256432KFREGCGL987'
      }
    }
  },

  recieveLoginAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.RECEIVE_LOGIN_SUCCESS,
      token: 'AOHIVLP8Y7UOL3;08YLHAJLCKIG43'
    }
  },

  userGroupsAction: {
    action: {
      actionType: AppConstants.RECEIVE_USER_GROUPS,
      groups: {
        groupId: 'KJJH772SLJKHDLAI8',
      }
    }
  },

  resetPasswordAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.RESET_PASSWORD,
      email: 'sas@gmail.com',
    }
  },

  usersListAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.RECEIVE_USERS,
      users: [
      { userId: 'KJJH772SLJKHDLAI8', userName: 'wash' },
      { userId: 'N.SLJLPWE84UHN', userName: 'sas' },
      ]
    }
  },

  addMemberToGroupAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.RECIEVE_ADD_MEMBERS_TO_GROUP,
      user: {
        userId: 'JHDSKAODCIO9',
        userName: 'sas@email.com'
      }
    }
  },

  clearSearchAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.CLEAR_SEARCH,
    }
  },

  googleLoginAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.GOOGLE_LOGIN,
      idToken: 'AWLSHFGJHJKWLL8799KLJK'
    }
  },

  loginAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.LOGIN_USER,
      user: {
        email: 'sas@gmail.com',
        password: 'ADEOLA212'
      }
    }
  },

  registerUserAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.REGISTER_USER,
      user: {
        email: 'sas@gmail.com',
        password: 'ADEOLA212',
        phoneNumber: '2348037817325',
        userName: 'sas'
      }
    }
  },

  userMessagesAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.GET_USER_MESSAGES,
      groups: {
        groupId: 'AJDSLIOEO32870WKJH',
      }
    }
  },

  readUsersAction: {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.RECEIVE_READ_USERS,
      message: {
        messageId: 'ASOLVHUKJH',
      }
    }
  },

  loginUser: {
    email: 'testemail@email.com',
    password: 'testpassword',
  },

  registerUser: {
    email: 'testemail@email.com',
    password: 'testpassword',
    phoneNumber: '2348037821732',
    userName: 'sas'
  },

  googleUser: {
    idToken: 'WL78348347KFHWLJKPUR34',
  },

  errorMessage: {
    message: 'There is an error',
  },

  successMessage: {
    message: 'Success! ',
  },

  readMessage: {
    messageId: '-KuL3gft2t6lpxeJDjwX',
  },

  groupCreate: {
    groupName: 'first test group',
    groupId: 'KHJVKLFGUIRHLEGUL8',
  },

  addUser: {
    userName: 'Eloka',
    userId: 'K39DAS8220Hffu76393',
  },

  postMessage: {
    groupId: 'KD884D24bkslutx630Cv0',
    author: 'wash',
    date: '017-09-18T17:39:27.704Z',
    messageId: '-KuL3gft2t6lpxeJDjwX',
    messageText: 'is it workin',
    priorityLevel: '',
    status: 'Read',
  },

  resetEmail: {
    email: 'sas@gmail.com'
  },

  recieveUsersInGroup: {
    groupId: 'LDKLDHO837SLK9089',
  }
};

export default mockData;
