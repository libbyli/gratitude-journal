import React from 'react';
import ReactDOM from 'react-dom';

class Submission extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div>
        what&#39;s your username?
        <div>
          <input
            type="text"
            name="input"
            maxLength="20"
          />
        </div>
        <div>
          and what are you grateful for today?
          <div>
            <input
              type="text"
              name="input"
              maxLength="50"
            />
            <div>
              <button type="submit">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Submission;
