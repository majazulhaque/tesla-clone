import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Car from './components/Car';
import CarDetail from './components/CarDetail';

function App() {
  return (
    <div className="App">
      <Car/>
      <CarDetail/>
      {/* <Header/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
