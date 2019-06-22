import React from 'react';

// Indicate current page and total pages
export default function PageIndicator ({pages, activePage}) {
    return <div>
      <b>{activePage + 1}</b> / {pages}
    </div>
  } 
