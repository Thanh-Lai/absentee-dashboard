import React from 'react';

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
