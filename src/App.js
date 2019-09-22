import React from 'react';
import Search from './components/search';
import Filters from './components/filters';
import Counterlist from './components/counterlist';
import CounterAdder from './components/counteradder';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div id="search-filters" className="round">
      <Search/>
      <Filters/>
    </div>
    <Counterlist/>
    <CounterAdder/>
  </React.Fragment>
  );
}

export default App;