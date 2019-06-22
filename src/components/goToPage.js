import React from 'react';

// Go to individual page directly
export default function GoToPage({ goToPage, pages}) {
    const options = []
    for(let i = 0; i < pages; i++) {
      options.push(<option key={i} value={i}>{i + 1}</option>)
    }
    return <div>Go to page <select onChange={e => goToPage(parseInt(e.target.value))}>{options}</select></div>
  }
