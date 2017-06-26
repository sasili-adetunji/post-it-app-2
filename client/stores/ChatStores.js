import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import GroupSource from '../sources/GroupSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';

@datasource(GroupSource, MessageSource)
@decorate(alt)
class ChatStore {
  constructor(){
    this.state = {
      user: null,
      messages: null,
      messagesLoading: true
    };
  }

  @bind(Actions.messagesLoading)
  messagesLoading(){
    this.setState({
      messagesLoading: true
    });
  }

  @bind(Actions.messagesReceived)
  receivedMessages(messages){
    _(messages)
      .keys()
      .each((k)=> {
        messages[k].key = k;
      })
      .value();

    this.setState({
      messages,
      messagesLoading: false
    });
  }


  @bind(Actions.sendMessage)
  sendMessage(message){
    this.state.message = message;
    setTimeout(this.getInstance().sendMessage, 10);
  }

  @bind(Actions.messageReceived)
  messageReceived(msg){
    if(this.state.messages[msg.key]){
      return;
    }

    this.state.messages[msg.key] = msg;

    this.setState({
      messages: this.state.messages
    });
  }

  @bind(Actions.groupOpened)
  groupOpened(selectedGroup){
    _(this.state.groups)
      .values()
      .each((group)=> {
        group.selected = false;
      })
      .value();

    selectedGroup.selected = true;

    this.setState({
      selectedGroup,
      groups: this.state.groups,
      messagesDirty: true
    });

    setTimeout(this.getInstance().getMessages, 100);
  }

  @bind(Actions.groupsReceived)
  receivedGroups(groups){
    let selectedGroup;
    _(groups)
      .keys()
      .each((key, index) => {
        groups[key].key = key;
        if(groups[key].selected){
          selectedGroup = groups[key];
        }
      });
    this.setState({
      groups,
      selectedGroup,
      messagesDirty: true
    });
  }

  @bind(Actions.signin)
  signin(user){
    this.setState({user: user});
  }
  @bind(Actions.signup)
  signup(user){
    this.setState({user: user});
  }
}

export default alt.createStore(ChatStore)