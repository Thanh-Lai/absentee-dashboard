import React from 'react';

// Maps each student info and fill body with data points
export default function StudentList(props) {
    const dataStyle = { border: '1px solid black', backgroundColor: '#e6e6ff', textAlign: 'center' };
    const absenteeRate = Math.round(100 - props.student.attendancePercentage)

    return (
        <tr>
            <td style={dataStyle}>{props.student.firstName}</td>
            <td style={dataStyle}>{props.student.lastName}</td>
            <td style={dataStyle}>{absenteeRate}</td>
            <td style={dataStyle}>{props.student.grade}</td>
            <td style={dataStyle}>{props.student.email}</td>
            <td style={dataStyle}>{props.student.homePhoneNumber}</td>
            <td style={dataStyle}>{props.student.guidanceCounselorEmail}</td>
        </tr>
    )
}
