import React from 'react';
import ReactDOM from 'react-dom';
import Submission from './components/Submission.jsx';
import Retrieval from './components/Retrieval.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>share gratitude</h1>
        <div><Submission /></div>
        <div><Retrieval /></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
