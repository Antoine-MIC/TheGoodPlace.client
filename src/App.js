import React from 'react';
import './App.css';
import Nav from './Nav';
import Coffee from './components/Coffee';
import Coworking from './components/Coworking';
import Loft from './components/Loft';
import Cockpit from './components/Cockpit'
import PersonView from './components/PersonView';
import Map from './components/Map';
import{BrowserRouter as Router, Switch , Route} from 'react-router-dom';





function App() {
  return (

    <div className="App">
      <Nav/>
      <Coffee/>
      <Coworking/>
      <Loft/>
      <Cockpit/>
      <PersonView/> 
 
    </div>
  
    
  );
}

export default App;
