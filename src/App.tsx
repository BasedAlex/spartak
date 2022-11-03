import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/main';
import League from './../src/assets/images/2League.png';

function App() {
  return (
    <>
      <BrowserRouter>
        <img src={League} className="w-full" />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
