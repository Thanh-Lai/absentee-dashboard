import React from 'react';

// Toggle pointer to indicate sort by asc or desc
export default function HeadToggle({ children, active, onClick }) {
    return (
      <td
        onClick={onClick}
        style={{ fontWeight: active ? "bold" : "normal", cursor: "pointer" }}
      >
        {children}
      </td>
    );
  }
