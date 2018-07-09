import React from 'react';
import ReactDOM from 'react-dom';
import UserSubmission from './components/UserSubmission.jsx';
import EntrySubmission from './components/EntrySubmission.jsx';
import Retrieval from './components/Retrieval.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userSubmitted: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onUserEntry = this.onUserEntry.bind(this);
  };

  onUserEntry(name, event) {
    this.setState({
      name: name,
    });
    console.log(this.state.name)
  }

  onSubmit(buttonName, event) {
    if (buttonName === "user-submit") {
      this.setState({
        userSubmitted: true,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>share gratitude</h1>
        {this.state.userSubmitted 
          ? null
          : <div><UserSubmission onSubmit={this.onSubmit} onUserEntry={this.onUserEntry}/></div>
        }
        {this.state.userSubmitted 
          ? <div><EntrySubmission name={this.state.name}/></div>
          : null
        }
        {this.state.userSubmitted
          ? <div><Retrieval /></div>
          : null
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
