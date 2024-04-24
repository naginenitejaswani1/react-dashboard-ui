import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/sidebar.js';

import Home from './components/Home/home.js';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;