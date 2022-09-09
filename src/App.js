import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import  Sumbawa from './component/sumbawa/Sumbawa';
import Ksb from './component/ksb/Ksb'
import Tour from './component/Tour/Tour';
import AboutUs from './component/Aboutus/AboutUs';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='sumbawa' element={<Sumbawa /> } />      
      <Route path='ksb' element={<Ksb /> } />
      <Route path='tour' element={<Tour /> } />
      <Route path='aboutus' element={<AboutUs /> } />
    </Routes>
   </>
  );
}

export default App;
