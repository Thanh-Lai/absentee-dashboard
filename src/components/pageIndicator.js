import React from 'react';

export default function PageIndicator ({pages, activePage}) {
    return <div>
      <b>{activePage + 1}</b> / {pages}
    </div>
  } 
  