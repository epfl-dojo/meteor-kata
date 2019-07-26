import React, { Component } from 'react';


class Hello extends Component {
  render() {
    return (
      <div>
        <p>Vous avez pressé le bouton {this.props.counter} fois.</p>
        <button onClick={() => this.props.increment()}>Cliquez-moi !</button>
      </div>
    );
  }
}

export default Hello;
