import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');
const moment = require('moment');

class EntryRetrieval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      oneSelfClicked: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(buttonName, event) {
    if (buttonName === "one-self") {
      axios.get(`/entries/${this.props.id}`)
        .then((response) => {
          this.setState({
            entries: response.data,
            oneSelfClicked: true,
          });
        })
        .catch(error => console.error(error));
    }
  }

  renderRandomUserEntry() {
    const entry = this.state.entries[Math.floor(Math.random() * this.state.entries.length)];
    const entryText = entry.entry_text;
    const entryDate = entry.entry_date;
    return (
      <div>
        you were grateful for {entryText} on {moment(`${entryDate}`).format("dddd, MMMM Do YYYY").toLowerCase()}
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>tell me . . .</h3>
        {this.state.oneSelfClicked
          ? this.renderRandomUserEntry()
          : null
        }
        <div>
          <button
            type="submit"
            name="one-self"
            onClick={event => this.handleSubmit(event.target.name, event)}
          >
            something i was grateful for
          </button>
          <button type="submit">
            the last five things i was grateful for
          </button>
        </div>
        <div>
          <button type="submit">
            something someone else was grateful for
          </button>
        </div>
      </div>
    );
  }
}

export default EntryRetrieval;
