import React from 'react';
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
//import DummyData from './data/dummydata'
import axios from 'axios';


function App () {

  // const suggestions = [];
  // for (var i=0;i<DummyData["data"].length;i++){
  //   suggestions.push(DummyData["data"][i]["employee_name"]);
  // }

  const suggestions = [];

  axios.get('http://dummy.restapiexample.com/api/v1/employees')
  .then(
    res => {
      console.log(res.data["data"]);
      for (var i=0;i<res.data["data"].length;i++) {
        suggestions.push(res.data["data"][i]["employee_name"]);
      }
    }
  )


  return(
      <div className="">
          <Header />
          <Search suggestions={suggestions} />
      </div>
  );
};

export default App;
