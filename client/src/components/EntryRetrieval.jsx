import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');
const moment = require('moment');

class EntryRetrieval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEntries: [],
      publicEntries: [],
      oneSelfClicked: false,
      lastFiveClicked: false,
      oneRandomClicked: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(buttonName) {
    if (buttonName === "one-self" || buttonName === "last-five") {
      axios.get(`/entries/all/${this.props.id}`)
        .then((response) => {
          this.setState({
            userEntries: response.data,
          });
        })
        .catch(error => console.error(error));
      if (buttonName === "one-self") {
        this.setState({
          oneSelfClicked: true,
          lastFiveClicked: false,
          oneRandomClicked: false,
        });
      } else {
        this.setState({
          oneSelfClicked: false,
          lastFiveClicked: true,
          oneRandomClicked: false,
        });
      }
    }
    if (buttonName === "one-random") {
      axios.get(`/entries/public/${this.props.id}`)
        .then((response) => {
          this.setState({
            publicEntries: response.data,
          });
        })
        .catch(error => console.error(error));
      this.setState({
        oneSelfClicked: false,
        lastFiveClicked: false,
        oneRandomClicked: true,
      });
    }
  }

  renderOneUserEntry() {
    const entry = this.state.userEntries[Math.floor(Math.random() * this.state.userEntries.length)];
    const entryText = entry ? entry.entry_text : null;
    const entryDate = entry ? entry.entry_date : null;
    return (
      <div>
        you were grateful for {entryText} on {moment(`${entryDate}`).format("dddd, MMMM Do YYYY").toLowerCase()}
      </div>
    );
  }

  renderLastFiveUserEntries() {
    const entries = this.state.userEntries.slice(-5);
    return (
      <div>
        the last five things you were grateful for were:
        <ul>
          {entries.map(entry => <li key={entry.entry_id}>{entry.entry_text}</li>)}
        </ul>
      </div>
    )
  }

  renderRandomUserEntry() {
    const randomEntry = this.state.publicEntries[Math.floor(Math.random() * this.state.publicEntries.length)];
    const randomEntryName = randomEntry ? randomEntry.entry_name : null;
    const randomEntryText = randomEntry ? randomEntry.entry_text : null;
    return (
      <div>
        {randomEntryName} was grateful for {randomEntryText}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>tell me . . .</h3>
        <div>
          <button
            type="submit"
            name="one-self"
            onClick={event => this.handleSubmit(event.target.name)}
          >
            something i was grateful for
          </button>
          <button
            type="submit"
            name="last-five"
            onClick={event => this.handleSubmit(event.target.name)}
          >
            the last five things i was grateful for
          </button>
        </div>
        <div>
          <button
            type="submit"
            name="one-random"
            onClick={event => this.handleSubmit(event.target.name)}
          >
            something someone else was grateful for
          </button>
        </div>
        {this.state.oneSelfClicked
          ? this.renderOneUserEntry()
          : null
        }
        {this.state.lastFiveClicked
          ? this.renderLastFiveUserEntries()
          : null
        }
        {this.state.oneRandomClicked
          ? this.renderRandomUserEntry()
          : null
        }
      </div>
    );
  }
}

export default EntryRetrieval;
