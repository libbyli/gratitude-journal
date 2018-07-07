import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      entry: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, event) {
    if (name === 'username') {
      this.setState({
        username: event.target.value,
      });
    } else {
      this.setState({
        entry: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    // axios.post('')
  }

  render() {
    return (
      <div>
        what&#39;s your username?
        <div>
          <input
            type="text"
            name="username"
            maxLength="20"
            onChange={event => this.handleChange(event.target.name, event)}
          />
        </div>
        <div>
          and what are you grateful for today?
          <div>
            <input
              type="text"
              name="entry"
              maxLength="50"
              onChange={event => this.handleChange(event.target.name, event)}
            />
            <div>
              <button 
                type="submit"
                onChange={this.handleSubmit}
              >
                  submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Submission;
