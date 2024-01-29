import React from 'react'
import "./App.css";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Success from './PAges/Success';
import Home from './PAges/Home';
import NotFound from './PAges/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Success/>}/>
        <Route path="/" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
