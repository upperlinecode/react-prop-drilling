import React from 'react';
import './App.css';

const WikiButton = () => {
    return(
        <a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-block card-btn">View on Wikipedia</button>
        </a>
    )
}

export default WikiButton