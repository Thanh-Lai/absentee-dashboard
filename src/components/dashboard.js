import React, { Component } from 'react';
import * as data from './students.json';
import * as placeHolderData from './placeholder.json';
import Container from '@material-ui/core/Container';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Datasort from 'react-data-sort';
import TableHead from './tableHead';
import StudentList from './studentList';
import './dashboard.css';
import Pages from './pages';
import GoToPage from './goToPage';
import Navigation from './navigation';
import PageIndicator from './pageIndicator';

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

    componentDidMount() {
        const temp = []
        for (let i = 0; i < this.state.studentData.length; i++) {
            const student = this.state.studentData[i]
            const absenteeRate = Math.round(100 - student.attendancePercentage)
            if (student.status === 'Active' && absenteeRate >= 0 && absenteeRate <= 100) {
                temp.push(student);
            }
        }
        this.setState({ filteredStudents: temp })
    }

    handleRateChange = (value) => {
        this.setState({
            rate: value,
            changedPage: true
        });
    }

    formatSlide = (value) => {
        return `${value}%`;
    }

    render() {
        const style = { border: "1px solid black", width: "1250px" };
        const { min, max } = this.state.rate;
        let filteredStudents = [];
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
                <nav id="dashboard-head">Student Absentee Dashboard</nav>
                <br />
                <h2>Absentee Rate: </h2>
                <br />
                <InputRange
                    maxValue={100}
                    minValue={0}
                    allowSameValues={true}
                    value={this.state.rate}
                    onChange={this.handleRateChange}
                    formatLabel={this.formatSlide}
                    onChangeComplete={handleChangeComplete(this.state.studentData, min, max)} />

                <br /> <br />
                <Datasort
                    data={filteredStudents}
                    pages={this.state.pages}
                    paginate
                    itemsPerPage={25}
                    defaultSortBy="attendancePercentage"
                    render={({
                        data,
                        setSortBy,
                        sortBy,
                        direction,
                        toggleDirection,
                        activePage,
                        goToPage,
                        nextPage,
                        prevPage,
                        pages
                    }) => (
                            <div>
                                <table id="table" style={style}>
                                    <TableHead
                                        setSortBy={setSortBy}
                                        sortBy={sortBy}
                                        direction={direction}
                                        toggleDirection={toggleDirection}>
                                    </TableHead>
                                    <tbody>
                                        {
                                            data.map(student => {
                                                return (
                                                    <StudentList
                                                        key={student.studentId}
                                                        student={student}>
                                                    </StudentList>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <Pages style={{ justifyContent: 'space-between' }}>
                                    <GoToPage goToPage={goToPage} pages={this.state.pages || 1} />
                                    <PageIndicator pages={this.state.pages || 1} activePage={activePage} />
                                    <Navigation
                                        activePage={activePage}
                                        goToPage={goToPage}
                                        nextPage={nextPage}
                                        prevPage={prevPage}
                                        pages={this.state.pages || 1}
                                    />
                                </Pages>
                            </div>
                        )}>
                </Datasort>
            </Container>
        )
    }
}