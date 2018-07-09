import React from 'react';
import ReactDOM from 'react-dom';
import UserSubmission from './components/UserSubmission.jsx';
import EntrySubmission from './components/EntrySubmission.jsx';
import EntryRetrieval from './components/EntryRetrieval.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      latestId: null,
      name: '',
      userSubmitted: false,
      latestEntry: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onUserEntry = this.onUserEntry.bind(this);
    this.onEntrySubmission = this.onEntrySubmission.bind(this);
  };

  onUserEntry(name, value) {
    if (name === 'name') {
      this.setState({
        name: value,
      });
    }
    if (name === 'id') {
      this.setState({
        id: value,
      });
    }
    if (name === 'latestId') {
      this.setState({
        latestId: value,
      });
    }
  }

  onSubmit() {
    this.setState({
      userSubmitted: true,
    });
  }

  onEntrySubmission(value) {
    this.setState({
      latestEntry: value,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>share gratitude</h1>
        {this.state.userSubmitted
          ? null
          : (
            <div>
              <UserSubmission
                onSubmit={this.onSubmit}
                onUserEntry={this.onUserEntry}
              />
            </div>
          )
        }
        {this.state.userSubmitted
          ? (
            <div>
              <EntrySubmission
                id={this.state.id}
                latestId={this.state.latestId}
                name={this.state.name}
                onEntrySubmission={this.onEntrySubmission}
              />
            </div>
          )
          : null
        }
        {this.state.userSubmitted
          ? (
          <div>
            <EntryRetrieval
              id={this.state.id}
              latestId={this.state.latestId}
              name={this.state.name}
            />
          </div>
          )
          : null
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
