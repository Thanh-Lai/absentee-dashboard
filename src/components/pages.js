import React from 'react';

export default function Pages({ children, style }) {
    return <div style={{ display: "flex", ...style }}>{children}</div>;
  }
  