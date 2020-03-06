import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCalculator from './components/calculator/MyCalculator';
import Heroes from './components/heroes/Heroes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Apod from './components/apod/Apod';
import Beers from './components/beers/Beers';
import Trivial from './components/trivial/Trivial';

function App() {
  return (
    <Tabs defaultActiveKey="trivial" id="uncontrolled-tab-example">
      <Tab eventKey="calculator" title="Calculator">
        <MyCalculator></MyCalculator>
      </Tab>
      <Tab eventKey="heroes" title="Heroes">
        <Heroes></Heroes>
      </Tab>
      <Tab eventKey="apod" title="Apod">
        <Apod></Apod>
      </Tab>
      <Tab eventKey="beers" title="Beers">
        <Beers></Beers>
      </Tab>
      <Tab eventKey="trivial" title="Trivial">
        <Trivial></Trivial>
      </Tab>
    </Tabs>

  );
}

export default App;
