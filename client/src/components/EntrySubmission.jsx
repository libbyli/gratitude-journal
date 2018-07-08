import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class EntrySubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      entry: '',
      public: 1,
      success: false,
      userSubmitted: false,
      existingUser: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleChange(name, event) {
    if (name === 'name') {
      this.setState({
        name: event.target.value,
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

  handleEntrySubmit() {
    axios.post('/entries', {
      name: this.state.name,
      entry: this.state.entry,
      public: this.state.public
    })
      .then(this.setState({
        success: true,
      }))
      .catch(err => console.error('handleEntrySubmit error: ', err));
  }

  handleUserSubmit() {
    axios.get(`/users/${this.state.name}`, {
      name: this.state.name,
    })
      .then((results) => {
        if (results.data.length === 0) {
          axios.post('/users', {
            name: this.state.name,
          })
            .then(this.setState({
              userSubmitted: true,
            }))
            .catch(err => console.error('handleUserSubmit post error: ', err));
        } else {
          this.setState({
            existingUser: true,
          });
        }
      })
      .catch(err => console.error('handleUserSubmit get error: ', err));
  }

  showEntryField() {
    if (this.state.userSubmitted) {
      return (
        <div>
          {this.state.success 
            ? <div><strong>entry successfully posted!</strong></div>
            : null}
          <div>
            i'm grateful for...
            <div>
              <input
                type="text"
                name="entry"
                maxLength="40"
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
              onClick={this.handleEntrySubmit}
            >
                submit
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.state.existingUser
          ? <div>this username is already in use, please choose another.</div>
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

  render() {
    return (
      this.showEntryField()
    );
  }
}

export default EntrySubmission;
