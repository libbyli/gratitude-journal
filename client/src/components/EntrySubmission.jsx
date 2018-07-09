import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class EntrySubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: '',
      public: 1,
      success: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
  }

  handleChange(name, event) {
    if (name === 'entry') {
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
      name: this.props.name,
      entry: this.state.entry,
      public: this.state.public
    })
      .then(this.setState({
        success: true,
      }))
      .catch(err => console.error('handleEntrySubmit error: ', err));
  }

  render() {
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
            do you want this be shareable to the world?
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
}

export default EntrySubmission;
