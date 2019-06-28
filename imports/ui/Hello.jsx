import React, { Component } from 'react';

export default class Hello extends Component {
  state = {
    counter: 0,
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <p>Vous avez pressé le bouton {this.state.counter} fois.</p>
        <button onClick={() => this.increment()}>Cliquez-moi !</button>
      </div>
    );
  }
}
