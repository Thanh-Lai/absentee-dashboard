import React, { Component } from 'react';
import * as data from './students.json';
import * as placeHolderData from './placeholder.json';
import Container from '@material-ui/core/Container';
import InputRange from 'react-input-range';
import { validate } from '@babel/types';

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            rate: { min: 0, max: 100 },
            pages: 20,
            changedPage: false,
            studentData: data.default
        }
        this.handleRateChange = this.handleRateChange.bind(this);
        this.formatSlide = this.formatSlide.bind(this);
    }

    handleRateChange = (value) => {
        this.setState({
            rate: validate,
            changedPage: true
        })
    }

    formatSlide = (value) => {
        return `${value}%`
    }

    render() {
        const { min, max } = this.state.rate;
        let filteredStudents = []
        const handleChangeComplete = (students, min, max) => {
            let count = 0;
            for (let i = 0; i < students.length; i++) {
                const student = students[i]
                const absenteeRate = Math.round(100 - student.attendancePercentage)
                if (student.status === 'Active' && absenteeRate >= min && absenteeRate <= max) {
                    filteredStudents.push(student);
                    count++;
                }
            }
            if (filteredStudents.length === 0) {
                filteredStudents = placeHolderData.default;
            }

            if (this.state.changedPage) {
                this.setState({ pages: Math.ceil(count / 25), changedPage: false });
            }
        }
        return (
            <Container>
                <h1>Student Absentee Rate</h1>
                <br />
                <h2>Absentee Rate: </h2>
                <br /><br />
                <InputRange
                    maxValue={100}
                    minValue={0}
                    allowSameValues={true}
                    value={this.state.rate}
                    onChange={this.handleRateChange}
                    formatLabel={this.formatSlide}
                    onChangeComplete={handleChangeComplete(this.state.studentData, min, max)}>
                </InputRange>
            </Container>
        )
    }
}