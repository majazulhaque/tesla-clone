import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarHome from './components/HomeCar/CarHome';
import Car from './components/CarDetails/Car';
import { CarDetailData } from './components/CarDetails/CarDetailData';
import SolarRoof from './components/SolarRoofDetails/SolarRoof';
import SolarPanel from './components/SolarPanelDetails/SolarPanel';
import PowerWall from './components/PowerWallDetails/PowerWall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<CarHome/>} />
        <Route path="/1" element={<Car cardata={CarDetailData[0]}/>} />
        <Route path="/2" element={<Car cardata={CarDetailData[1]}/>} />
        <Route path="/3" element={<Car cardata={CarDetailData[2]}/>} />
        <Route path="/4" element={<Car cardata={CarDetailData[3]}/>} />
        <Route path="/5" exact element={<SolarRoof/>} />
        <Route path="/6" exact element={<SolarPanel/>} />
        <Route path="/7" exact element={<PowerWall/>} />
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;
