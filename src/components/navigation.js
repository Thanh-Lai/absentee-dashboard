import React from 'react';
import Pages from './pages';
import './navigation.css';

export default function Navigation({ activePage, goToPage, nextPage, prevPage, pages }) {

    return (
      <Pages>
        <button className="direction-btn"  disabled={activePage === 0} onClick={() => goToPage(0)}>
          {"<<"}
        </button>
        <button className="direction-btn"  disabled={activePage === 0} onClick={prevPage}>
          {"<"}
        </button>
  
        <button className="direction-btn"  disabled={activePage === pages - 1} onClick={nextPage}>
          {">"}
        </button>
        <button
          className="direction-btn" 
          disabled={activePage === pages - 1}
          onClick={() => goToPage(pages - 1)}
        >
          {">>"}
        </button>
      </Pages>
    );
  }
