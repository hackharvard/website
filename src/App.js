import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Board from './components/Board';
import Wtf from './components/Wtf';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/wtf" element={<Wtf />} />
      </Routes>
    </Router>
  );
}

export default App;
