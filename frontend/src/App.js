import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
// import axios from 'axios';

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
// import home from './Pages/home.js';



function App() {
  const [user,setUser]= useState();
  // const [userCart,setuserCart]= useState();

  const userData=(data)=>{
    setUser(data?.data);
    // console.log("from Parent",data?.data);
  }

  // console.log(user?.data);
  
  if(!user){
    return <Login func={userData}/>
  }
  else{
    return (
      <>

        <BrowserRouter>
          <Navbar />{/*This is placed here so that it is considered a router component 
          else the navlink in navbar doesnt work*/}
          <Routes>
            <Route index element={<Home />}/>
            {/* <Route path='/home' element={<Home />}/> */}
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/cart' element={<Cart id={user._id}/>}></Route>
            <Route path='/product' element={<Product id={user._id}/>}></Route>
            {/* <Route path='/navlink' element={<Navbar />}></Route> */}
          </Routes>
        </BrowserRouter>

        
        <hr />
        <Footer />
      </>
    );}
}

export default App;



// const [input, setInput] = useState("");

  // const url = 'https://real-time-product-search.p.rapidapi.com/search?q=smartphone&country=us&language=en';
  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'X-RapidAPI-Key': '726de44217mshbf1db20a5c4eac7p183083jsn4ba17c63221f',
  //         'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
  //     }
  // };

  // // fetch(url,options).then(res => res.json()).then(data => console.log(data));

  // fetch('https://dummyjson.com/products/search?q=Laptop')
  // .then(res => res.json())
  // .then(json => console.log(json))

  // useEffect(() => {
  //   axios.get("https://dummyjson.com/products/search?q=Laptop")
  //   .then(res => console.log(res));
  // })

  // const [data,setData] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/product")
  //   .then(res => setData(res.data))
  //   .catch(err => console.log(err));
  // },[]);

  // console.log("Data is" , data);
