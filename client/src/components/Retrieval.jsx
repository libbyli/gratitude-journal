import React from 'react';
import ReactDOM from 'react-dom';

class Retrieval extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div>
        tell me something i was grateful for
        <div>
          <button type="submit">
            submit
          </button>
        </div>
        or tell me something someone else was grateful for
        <div>
          <button type="submit">
            submit
          </button>
        </div>
      </div>
    );
  }
}

export default Retrieval;
