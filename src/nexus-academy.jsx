import React from 'react';
import Home from './componentes/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom';


function NexusAcademy() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default NexusAcademy;
