import React from 'react';
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import DummyData from './data/dummydata'

function App () {

  const suggestions = [];
  for (var i=0;i<DummyData["data"].length;i++){
    suggestions.push(DummyData["data"][i]["employee_name"]);    
  }


  return(
      <div className="">
          <Header />
          <Search suggestions={suggestions} />
      </div>
  );
};

export default App;
