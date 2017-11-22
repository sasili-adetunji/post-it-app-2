import PostItConstants from '../../constants/PostItConstants';


const mockData = {
  searchedUsers: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.SEARCH_USERS,
      payload: {
        user: {
          userNames: 'w' }
      }
    }
  },

  creategroup: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RECIEVE_CREATE_GROUP,
      group: {
        groupName: 'West'
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

  signOut: {
    action: {
      actionType: PostItConstants.SIGNOUT_USER,
    }
  },

  usersInGroups: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RECIEVE_USERS_IN_GROUPS,
      group: {
        groupId: 'GKLQMLSDF256432KFREGCGL987'
      }
    }
  },

  recieveLogin: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RECEIVE_LOGIN_SUCCESS,
      token: 'AOHIVLP8Y7UOL3;08YLHAJLCKIG43'
    }
  },

  userGroups: {
    action: {
      actionType: PostItConstants.RECEIVE_USER_GROUPS,
      groups: {
        groupId: 'KJJH772SLJKHDLAI8',
      }
    }
  },

  resetPassword: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RESET_PASSWORD,
      email: 'sas@gmail.com',
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
  },

  addMemberToGroup: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RECIEVE_ADD_MEMBERS_TO_GROUP,
      user: {
        userId: 'JHDSKAODCIO9',
        userName: 'sas@email.com'
      }
    }
  },

  clearSearch: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.CLEAR_SEARCH,
    }
  },

  googleLogin: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.GOOGLE_LOGIN,
      idToken: 'AWLSHFGJHJKWLL8799KLJK'
    }
  },

  login: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.LOGIN_USER,
      user: {
        email: 'sas@gmail.com',
        password: 'ADEOLA212'
      }
    }
  },

  registerUser: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.REGISTER_USER,
      user: {
        email: 'sas@gmail.com',
        password: 'ADEOLA212',
        phoneNumber: '2348037817325',
        userName: 'sas'
      }
    }
  },

  userMessages: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.GET_USER_MESSAGES,
      groups: {
        groupId: 'AJDSLIOEO32870WKJH',
      }
    }
  },

  readUsers: {
    source: 'VIEW_ACTION',
    action: {
      actionType: PostItConstants.RECEIVE_READ_USERS,
      message: {
        messageId: 'ASOLVHUKJH',
      }
    }
  },

  loginUser: {
    email: 'testemail@email.com',
    password: 'testpassword',
  },

  regiserUser: {
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
