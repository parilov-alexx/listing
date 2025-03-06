import React from 'react';
import './App.css';
import Listing from './Listing';
import data from './data/etsy.json';

function App() {
  return (
    <div className="App">
       <Listing items={data} />
    </div>
  );
}

export default App;



/*"start": "react-scripts start",
    "build": "react-scripts build"*/
