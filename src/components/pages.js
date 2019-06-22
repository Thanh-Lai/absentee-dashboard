import React from 'react';

// Individual pages
export default function Pages({ children, style }) {
    return <div style={{ display: "flex", ...style }}>{children}</div>;
  }
