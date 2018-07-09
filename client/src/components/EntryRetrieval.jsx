import React from 'react';
import ReactDOM from 'react-dom';

class EntryRetrieval extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(buttonName, event) {
    if (buttonName === "one-private") {
      axios.get()
    }
  }

  render() {
    return (
      <div>
        <h2>tell me . . .</h2>
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

export default EntryRetrieval;
