import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Destination from './component/Destination/Destination';
import Tour from './component/Tour/Tour';
import AboutUs from './component/Aboutus/AboutUs';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='destination' element={<Destination /> } />
      <Route path='tour' element={<Tour /> } />
      <Route path='aboutus' element={<AboutUs /> } />
    </Routes>
   </>
  );
}

export default App;
