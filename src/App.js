import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css"
import navigation from './components/Navigation/Navigation';
import Nav from './components/Navigation/Nav';
import Home from './components/Pages/Home';
import Reservations from './components/Pages/Reservations';

function App() {
  return (
    <div data-testid="app-component">
      <Nav>
        <Routes>
            <Route path={navigation.get("home").path} element={<Home />} />
            <Route path={navigation.get("reservations").path} element={<Reservations />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </Nav>
    </div>
  );
}

export default App;
