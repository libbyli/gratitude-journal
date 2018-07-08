import React from 'react';
import ReactDOM from 'react-dom';
import UserSubmission from './components/UserSubmission.jsx';
import EntrySubmission from './components/EntrySubmission.jsx';
import Retrieval from './components/Retrieval.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSubmitted: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  };

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
          : <div><UserSubmission onSubmit={this.onSubmit}/></div>
        }
        {this.state.userSubmitted 
          ? <div><EntrySubmission onSubmit={this.onSubmit}/></div>
          : null
        }
        <div><Retrieval /></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
