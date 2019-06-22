import React, {Component} from 'react';
import * as data from './students.json';
import * as placeHolderData from './placeholder.json';
import Container from '@material-ui/core/Container'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            rate: { min: 0, max: 100},
            pages: 20,
            changedPage: false,
            studentData: data.default
        }
    }
    render() {
        return (
            <Container>
                <h1>Student Absentee Rate</h1>
            </Container>
        )
    }
}