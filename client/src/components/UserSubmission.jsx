import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class UserSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      duplicateUser: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleChange(name, event) {
    if (name === 'name') {
      this.setState({
        name: event.target.value,
      });
      this.props.onUserEntry(event.target.value, event);
    }
  }

  handleUserSubmit(buttonName, event) {
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
        } else if (response.data === 'User added') {
          this.props.onSubmit(buttonName, event);
        }
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        {this.state.duplicateUser
          ? 
          (
            <div>
              <strong>
                sorry, that username is already in use, please choose another.
              </strong>
            </div>
          )
          : null}
        <div>
          please fill in your username.<br />
          if you don&#39;t have one, type one in and click submit.
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
      </div>
    );
  }
}

export default UserSubmission;
