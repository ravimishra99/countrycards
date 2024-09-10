import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import data from './data.json';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<CountryList countries={data} />} />
          <Route path="/country/:name" element={<CountryDetail countries={data} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
