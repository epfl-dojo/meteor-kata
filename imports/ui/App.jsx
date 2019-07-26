import React, { Component } from 'react';
import Hello from './Hello.jsx';
import Knights from './Knights.jsx';
import { withTracker } from 'meteor/react-meteor-data';


const testData = [
    {name: "Lancelot", quest: "To seek the Holy Grail", favoriteColor: "blue"},
    {name: "Arthur", quest: "To seek the Holy Grail", favoriteColor: "green"},
    {name: "Galahad", quest: "To seek the Holy Grail", unladenSwallowVelocity: 0}
]

counter = new ReactiveVar(0)

class App extends Component{
  increment() {
    counter.set(counter.get() + 1);
  }

  render() {
    return <div>
    <h1>Exemple avec React</h1>
    <Hello counter={this.props.counter} increment={this.increment.bind(this)}/>
    <Hello counter={this.props.counter} increment={this.increment.bind(this)}/>
    <Knights testData={testData} />
  </div>;
  }
}

export default AppWrapped = withTracker(() => {
    return {
      counter: counter.get()
    };
})(App);
