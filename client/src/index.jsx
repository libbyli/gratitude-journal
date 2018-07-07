import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>What are you grateful for?</h1>
        <div>
          <input
            type="text"
            name="input"
          />
          <button type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
