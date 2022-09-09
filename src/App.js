import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import  Sumbawa from './component/sumbawa/Sumbawa';
import Ksb from './component/ksb/Ksb'
import Tour from './component/Tour/Tour';
import AboutUs from './component/Aboutus/AboutUs';
import Login from './component/Login/Login';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='sumbawa' element={<Sumbawa /> } />      
      <Route path='ksb' element={<Ksb /> } />
      <Route path='tour' element={<Tour /> } />
      <Route path='aboutus' element={<AboutUs /> } />
      <Route path='Login' element={<Login /> } />
    </Routes>
   </>
  );
}

export default App;
