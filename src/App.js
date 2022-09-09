import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Destination from './component/Destination/Destination';
import Tour from './component/Tour/Tour';
import AboutUs from './component/Aboutus/AboutUs';
import Transaksi from './component/Transaksi/Transaksi';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='destination' element={<Destination /> } />
      <Route path='tour' element={<Tour /> } />
      <Route path='aboutus' element={<AboutUs /> } />
      <Route path='transaksi' element={<Transaksi /> } />
    </Routes>
   </>
  );
}

export default App;
