import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      entry: '',
      public: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, event) {
    if (name === 'username') {
      this.setState({
        username: event.target.value,
      });
    } else if (name === 'entry') {
      this.setState({
        entry: event.target.value,
      });
    } else if (name === 'public') {
      this.setState({
        public: 1,
      });
    } else if (name === 'private') {
      this.setState({
        public: 0,
      });
    }
  }

  handleSubmit(event) {
    axios.post('/entries', {
      username: this.state.username,
      entry: this.state.entry,
      public: this.state.public
    })
      .then(response => console.log(response))
      .catch(err => console.error(err));
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
          </div>
        </div>
        <div>
          do you want this to be shared?
          <div>
            <input
              type="radio"
              name="public"
              value={1}
              checked={this.state.public === 1}
              onChange={event => this.handleChange(event.target.name, event)}
            />
            <label htmlFor="public">yes</label>
            <input
              type="radio"
              name="private"
              value={0}
              checked={this.state.public === 0}
              onChange={event => this.handleChange(event.target.name, event)}
            />
            <label htmlFor="private">no</label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            onClick={this.handleSubmit}
          >
              submit
          </button>
        </div>
      </div>
    );
  }
}

export default Submission;
