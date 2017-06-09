import React from 'react';

export default class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { MessageInput: '' };

    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  
  submitHandler(e) {
    e.preventDefault();

    this.setState({ chatInput: '' });

    this.props.onSend(this.state.MessageInput);
  }

  textChangeHandler(e)  {
    this.setState({ MessageInput: e.target.value });
  }

  render() {
    return (
      <form className="message" onSubmit={this.submitHandler}>
        <input type="text"
          onChange={this.textChangeHandler}
          value={this.state.MessageInput}
          placeholder="Write a message..."
          required />
      </form>
    );
  }
}