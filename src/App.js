
import './App.css';
import Login from './Login';
import Buyer from './Buyer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Seller from './Seller';
import Home from './Home ';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      
      <Route path='/buyer' element={<Buyer/>}></Route>
       <Route path='/seller' element={<Seller/>}></Route>
      <Route path='/home' element={<Home/>}></Route> 
     </Routes>
     
     </BrowserRouter> 
  );
}

export default App;
