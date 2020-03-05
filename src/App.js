import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCalculator from './MyCalculator';
import Heroes from './Heroes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Apod from './Apod';
import Beers from './Beers';

function App() {
  return (
    <Tabs defaultActiveKey="beers" id="uncontrolled-tab-example">
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
    </Tabs>

  );
}

export default App;
