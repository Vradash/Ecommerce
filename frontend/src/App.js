import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';

import Navbar from './Components/navbar.js';
import Footer from "./Components/footer.js";
import Login from "./Pages/login.js";
import Home from './Pages/home.js'
import Contact from './Pages/contact.js'
import About from './Pages/about.js'
import Shop from './Pages/shop.js'
import Cart from './Pages/cart.js'
import Product from './Pages/product.js';
import './App.css';

function App() {
  const [user,setUser]= useState();

  const api=process.env.REACT_APP_API_URL;

  const userData=(data)=>{
    setUser(data?.data);
  }
  
  if(!user){
    return <Login func={userData} apiURL={api}/>
  }
  else{
    return (
      <>

        <BrowserRouter>
          <Navbar />{/*This is placed here so that it is considered a router component 
          else the navlink in navbar doesnt work*/}
          <Routes>
            <Route index element={<Home apiURL={api}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/shop' element={<Shop apiURL={api}/>}/>
            <Route path='/cart' element={<Cart id={user._id} apiURL={api}/>}></Route>
            <Route path='/product' element={<Product id={user._id} apiURL={api}/>}></Route>
          </Routes>
        </BrowserRouter>

        
        <hr />
        <Footer />
      </>
    );}
}

export default App;
