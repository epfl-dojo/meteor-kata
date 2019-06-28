import React, { Component } from 'react';

export default class DataTable extends Component {
  render() {
    const knightsAsTrs = this.props.knights.map((knight) =>
      <tr key={knight._id}>
        <td>{knight.name}</td>
        <td>{knight.quest}</td>
        <td>{knight.favoriteColor}</td>
        <td>{knight.unladenSwallowVelocity}</td>
      </tr>
    );
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quest</th>
            <th scope="col">Favorite color</th>
            <th scope="col">Unladen swallow velocity</th>
          </tr>
        </thead>
        <tbody>
          {knightsAsTrs}
        </tbody>
      </table>
    );
  }
}
