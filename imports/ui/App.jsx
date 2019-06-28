import React from 'react';
import Hello from './Hello.jsx';
import Knights from './Knights.jsx';

const testData = [
    {name: "Lancelot", quest: "To seek the Holy Grail", favoriteColor: "blue"},
    {name: "Arthur", quest: "To seek the Holy Grail", favoriteColor: "green"},
    {name: "Galahad", quest: "To seek the Holy Grail", unladenSwallowVelocity: 0}
]

const App = () => (
  <div>
    <h1>Exemple avec React</h1>
    <Hello />
    <Knights testData={testData} />
  </div>
);

export default App;
