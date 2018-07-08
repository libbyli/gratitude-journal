import React from 'react';
import ReactDOM from 'react-dom';

class Retrieval extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(buttonName, event) {
    // if (buttonName === "one-private") {
    //   this.
    // }
  }

  render() {
    return (
      <div>
        <h1>tell me . . .</h1>
        <div>
          <button
            type="submit"
            name="one-private"
            onClick={event => this.handleSubmit(event.target.name, event)}
          >
            something i was grateful for
          </button>
          <button type="submit">
            the last five things i was grateful for
          </button>
        </div>
        <div>
          <button type="submit">
            something someone else was grateful for
          </button>
        </div>
      </div>
    );
  }
}

export default Retrieval;
