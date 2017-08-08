import React from 'react';
import { CardHeader, CardTitle, Card } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import PostItStore from '../stores/PostItStore';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import PostItActions from '../actions/PostItActions';
import AddMember from './AddMember';
import CreateGroup from './CreateGroup';
import MessageBox from './MessageBox';
import Group from './Group';
import { List } from 'material-ui/List';


class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledAdd: false,
      showAdd: false,
      showCreate: false,
      showMessage: false,
      toggledCreate: false,
      toggledMessage: false
    };
    this.handleToggleAdd = this.handleToggleAdd.bind(this);
    this.handleToggleCreate = this.handleToggleCreate.bind(this);
    this.handleToggleMessage = this.handleToggleMessage.bind(this);
  }


  handleToggleAdd() {
    this.setState({
      toggledAdd: !this.state.toggledAdd
    });
  }

  handleToggleCreate() {
    this.setState({
      toggledCreate: !this.state.toggledCreate
    });
  }

  handleToggleMessage() {
    this.setState({
      toggledMessage: !this.state.toggledMessage
    });
  }

  render() {
    const groupNodes = this.props.groups.map((group, i) => {
      return (
        <Group group={group} key={i} />
      );
    });
    return (
      <div>
        <List >
          <CardTitle title="Group List" />
          {groupNodes}
        </List>
        <div>
          <h3>App Properties</h3>
          <Toggle
          name="addMember"
          label="Add Member"
          defaultToggled={this.state.toggledAdd}
          onToggle={this.handleToggleAdd}
        />
          <Toggle
          name="createGroup"
          label="Create Group"
          defaultToggled={this.state.toggledCreate}
          onToggle={this.handleToggleCreate}
        />
          <Toggle
          name="messageBox"
          label="Send Message"
          defaultToggled={this.state.toggledMessage}
          onToggle={this.handleToggleMessage}
        />
          {this.state.toggledAdd ? this.state.showAdd = true : this.state.showAdd = false}
          {this.state.showAdd ? <AddMember /> : ''}

          {this.state.toggledCreate ? this.state.showCreate = true : this.state.showCreate = false}
          {this.state.showCreate ? <CreateGroup /> : ''}

          {this.state.toggledMessage ? this.state.showMessage = true : this.state.showMessage = false}
          {this.state.showMessage ? <MessageBox /> : ''}
        </div>
      </div>
    );
  }
}


export default GroupList;
