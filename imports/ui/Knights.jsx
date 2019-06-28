import React, { Component } from 'react';
import DataTable from './DataTable.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import KnightsData from '../api/knights.js';

class Knights extends Component {
    addKnights() {
        for (let k of this.props.testData) {
            KnightsData.insert(k)
        }
    }

    clearKnights() {
        Meteor.call('removeAllKnights')
    }

    render() {
        return (
            <div>
                <DataTable knights={this.props.knights} />
                <div>
                    <button onClick={() => this.addKnights()}>Moar Knights</button>
                    <button onClick={() => this.clearKnights()}>No moar Knights</button>
                </div>
            </div>
        );
    }
}

export default KnightsContainer = withTracker(() => {
    return {
        knights: KnightsData.find().fetch()
    };
})(Knights);