import React from 'react';
import HeadToggle from './headToggle';

// Set table head and sort
export default function TableHead(props) {
    const styleHead = { color: 'white', backgroundColor: 'black' };
    const style = { border: "1px solid black",align: "center" };
    const columns = [
        { key: "firstName", title: "First Name" },
        { key: "lastName", title: "Last Name" },
        { key: "attendancePercentage", title: "Absentee (%)" },
        { key: "grade", title: "Grade" },
        { key: "email", title: "Email" },
        { key: "homePhoneNumber", title: "Home Phone" },
        { key: "guidanceCounselor", title: "Guidance\nCounselor" }
    ];

    const items = columns.map(({ key, title }) => {
        const active = key === props.sortBy;
        return (
            <HeadToggle
                key={key}
                active={active}
                onClick={() => {
                    if (active) {
                        props.toggleDirection();
                    }
                    props.setSortBy(key);
                }}
            >
                {title} {active ? props.direction === "asc" ? "▲" : "▼" : null}
            </HeadToggle>
        )
    })

    return (
        <thead style={styleHead}>
        <tr style={style}>{items}</tr>
      </thead>
    )
}
