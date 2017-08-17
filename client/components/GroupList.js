import React from 'react';
import { CardHeader, CardTitle, Card } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostItActions from '../actions/PostItActions';
import AddMember from './AddMember';
import CreateGroup from './CreateGroup';
import MessageBox from './MessageBox';
import Group from './Group';
import PostItStore from '../stores/PostItStore';


/**
 * Grouplist component with createGroup,MessageBox and AddMember component
 *
 * @class GroupList
 * @extends {React.Component}
 */
class GroupList extends React.Component {

  /**
   * Creates an instance of GroupList.
   * @param {any} props
   * @memberof GroupList
   */
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
  }

  /**
   * controls the toggle of addMember components
   *
   * @memberof GroupList
   */
  handleToggleAdd() {
    this.setState({
      toggledAdd: !this.state.toggledAdd
    });
  }

  /**
   * controls the toggle for creatMember components
   *
   * @memberof GroupList
   */
  handleToggleCreate() {
    this.setState({
      toggledCreate: !this.state.toggledCreate
    });
  }

  /**
   * The markup for the groupList components
   *
   * @returns {void}
   * @memberof GroupList
   */
  render() {
    const groupNodes = this.props.groups.map((group, i) => {
      return (
        <Group group={group} key={i} />
      );
    });
    return (
      <div className="bottomMargin">
        <MuiThemeProvider>
          <Card>
            <List >
              <CardTitle title="My Groups" />
              {groupNodes}
            </List>
           <Toggle
            name="createGroup"
            label="Create Group"
            defaultToggled={this.state.toggledCreate}
            onToggle={this.handleToggleCreate}
          />
          <Toggle
            name="addMember"
            label="Add Member"
            defaultToggled={this.state.toggledAdd}
            onToggle={this.handleToggleAdd}
          />
          {this.state.toggledAdd ? this.state.showAdd = true :
          this.state.showAdd = false}
          {this.state.showAdd ? <AddMember /> : ''}

          {this.state.toggledCreate ? this.state.showCreate = true :
          this.state.showCreate = false}
          {this.state.showCreate ? <CreateGroup /> : ''}
          </Card>
        </MuiThemeProvider>
        <div>
          
          
        </div>
      </div>
    );
  }
}


export default GroupList;
