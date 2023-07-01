import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './container/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './container/Login'
import HotelDetails from './container/HotelDeatails'
import LayOut from './components/LayOut';

function App() {
  return (
    <div className="">
     
     <BrowserRouter>
     <Routes>
      <Route path='/Home' element={<LayOut><Home/></LayOut>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='hotel-details/:slug' element={<LayOut><HotelDetails/></LayOut>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
