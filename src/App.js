import React, { useReducer, useEffect} from 'react';
import Search from './components/search';
import Filters from './components/filters';
import Counterlist from './components/counterlist';
import CounterAdder from './components/counteradder';
import counterReducer from './appreducer';
import './App.css';

function App() {

  const [counterarray, dispatch] = useReducer(counterReducer, []);
  useEffect(() =>{
    async function fetchData(){
      const response = await fetch('http://localhost:5000/api/v1/counters', {method:'get'});
      const initialData = await response.json();
      dispatch({type:'initial', data: initialData });
    }
    try{
      fetchData();
    }catch(e){
      console.log('couldnt do shit for now')
    }
    
  })
  return (
    <React.Fragment>
    <div id="search-filters" className="round">
      <Search/>
      <Filters/>
    </div>
    <Counterlist counterarray={counterarray} />
    <CounterAdder/>
  </React.Fragment>
  );
}

export default App;