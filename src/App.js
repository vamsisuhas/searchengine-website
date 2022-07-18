import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage'


function App() {
  return (
   <div className='App'>
    <Router>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<SearchPage/>}/>
       </Routes>
    </Router>

    </div>
  );
}

export default App;
