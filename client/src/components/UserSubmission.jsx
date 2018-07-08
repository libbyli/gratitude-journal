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
    }
  }

  handleUserSubmit() {
    axios.post('/users', {
      name: this.state.name
    })
      .then()
      .catch((error) => {
        if (error.response.status === 500) {
          console.log('catch block')
        }
      });
  }

  render() {
    return (
      <div>
        {this.state.existingUser
          ? 
          (
            <div>
              <strong>
                sorry, that username is already in use, please choose another.
              </strong>
            </div>
          )
          : null}
        <div>choose a username!</div>
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
            onClick={this.handleUserSubmit}
          >
              submit
          </button>
        </div>
      </div>
    );
  }
}

export default UserSubmission;
