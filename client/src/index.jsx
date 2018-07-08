import React from 'react';
import ReactDOM from 'react-dom';
import EntrySubmission from './components/EntrySubmission.jsx';
import Retrieval from './components/Retrieval.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>share gratitude</h1>
        <div><EntrySubmission /></div>
        {/* <div><Retrieval /></div> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
