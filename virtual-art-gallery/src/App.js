// App.js
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtList from './components/ArtList';
import ArtWork from './components/ArtWork';
import ModernArt from './components/ModernArt';
import Classical from './components/Classical';
import PopArt from './components/PopArt';
import Read from './components/Read';
import ArtistSection from './components/ArtistSection';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<ArtList />} />
          <Route exact path='/artgallery' element={<ArtistSection />} />
          <Route exact path='/artwork' element={<ArtWork />} />
          <Route exact path='/popart' element={<PopArt />} />
          <Route exact path='/natural' element={<naturalArt />} />
          <Route exact path='/modernart' element={< ModernArt/>} />
          <Route exact path='/classical' element={<Classical />} />
          <Route exact path='/read/:id' element={<Read/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

