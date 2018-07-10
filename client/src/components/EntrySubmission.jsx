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
      retrievedName: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.id !== null) {
      axios.get(`/users/${this.props.id}`)
        .then((response) => {
          this.setState({
            retrievedName: response.data[0].user_name
          })
        })
        .catch(error => console.error(error));
    }
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
      id: parseInt(this.props.id, 10),
      entry: this.state.entry,
      public: this.state.public
    })
      .then((response) => {
        this.setState({
          success: true,
        });
      })
      .catch(err => console.error('handleEntrySubmit error: ', err));
  }

  showGreeting() {
    return (
      <div>
        <h3>
          welcome, {this.state.retrievedName}! your user ID is {this.props.id}.<br />
          what are you grateful for today?
        </h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.success 
          ? (
            <h3>
              entry successfully posted!<br />
              write another?
            </h3>
          )
          : this.showGreeting()
        }
        <div>
          i&apos;m grateful for...
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              name="entry"
              maxLength="40"
              onChange={event => this.handleChange(event.target.name, event)}
            />
          </div>
        </div>
        <div>
          do you want this be shared with others?
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
            className="btn btn-outline-secondary"
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
