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
      name: '',
      userSubmitted: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onUserEntry = this.onUserEntry.bind(this);
  }

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
  }

  onSubmit() {
    this.setState({
      userSubmitted: true,
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
        <div className="row">
          {this.state.userSubmitted
            ? (
              <EntrySubmission
                id={this.state.id}
                name={this.state.name}
              />
            )
            : null
          }
          {this.state.userSubmitted
            ? (
              <EntryRetrieval
                id={this.state.id}
                name={this.state.name}
              />
            )
            : null
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
