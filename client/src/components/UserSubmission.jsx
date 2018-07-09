import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class UserSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      duplicateUser: false,
      userFound: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleChange(name, event) {
    if (name === 'name') {
      this.setState({
        name: event.target.value,
      });
      this.props.onUserEntry(name, event.target.value, event);
    }
    if (name === 'id') {
      this.setState({
        id: event.target.value,
      });
      this.props.onUserEntry(name, event.target.value, event);
    }
  }

  handleUserSubmit(buttonName) {
    if (buttonName === 'user-submit') {
      axios.post('/users', {
        name: this.state.name
      })
        .then((response) => {
          if (response.data === 'Duplicate user') {
            if (!this.state.duplicateUser) {
              this.setState({
                duplicateUser: true,
              });
            }
          } else {
            this.props.onUserEntry('latestId', response.data);
            this.props.onSubmit();
          }
        })
        .catch(error => console.error(error));
    }
    if (buttonName === 'userid-submit') {
      axios.get(`/users/${this.state.id}`)
        .then((response) => {
          if (response.data === 'User not found') {
            this.setState({
              userFound: false,
            });
          } else {
            this.props.onSubmit();
          }
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.duplicateUser
          ? <div><strong>sorry, that username is already in use, please choose another.</strong></div>
          : null}
        <div>
          create a username below.
        </div>
        <div>
          <input
            type="text"
            name="name"
            maxLength="20"
            onChange={event => this.handleChange(event.target.name, event)}
          />
        </div>
        <div>
          <button
            type="submit"
            name="user-submit"
            onClick={event => this.handleUserSubmit(event.target.name, event)}
          >
              submit
          </button>
        </div>
        <div>
          {this.state.userFound
            ? null
            : <div><strong>sorry, no user was found with that ID. please try again or create a new username.</strong></div>
          }
          or enter your user ID below if you have one to login.
        </div>
        <div>
          <input
            type="text"
            name="id"
            maxLength="20"
            onChange={event => this.handleChange(event.target.name, event)}
          />
        </div>
        <button
          type="submit"
          name="userid-submit"
          onClick={event => this.handleUserSubmit(event.target.name)}
        >
          submit
          </button>
      </div>
    );
  }
}

export default UserSubmission;
