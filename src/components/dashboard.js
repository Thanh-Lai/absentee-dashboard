import React, {Component} from 'react';

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            rate: { min: 0, max: 100},
            pages: 20,
            changedPage: false,
            // studentData: data.default
        }
    }
    render() {
        return <h1>Hi</h1>
    }
}