import { useState , useEffect } from 'react';
import axios from 'axios';
import Feature from "../Components/featureCard.js";
import ProductCard from '../Components/productCards.js';

function createCard(temp){
    return (
      <ProductCard 
      key={temp._id}
      id={temp._id}
      cardImg={temp.img[0]}
      cardName={temp.head}
      cardPrice={temp.price}/>
    );
};

//If u write home instead of Home, the function isnt considered an react component
function Home(props){

    const [data,setData] = useState([]);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    useEffect(() => {
        axios.get(`${props.apiURL}/api/product`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[]);
    //the api only gets two requests in developmental stage not in production
    // console.log("Data is" , data[0].title);

    return (
        <>
        <section id="banner">
            <h3>Same Day Delivery</h3>
            <h1>Super Value Deals</h1>
            <h1>On all Products</h1>
            <p>Save more with coupons and huge discounts</p>
            <a href="/blog" className="bannerbutt">Shop Now</a>
            {/* <!-- <button>Shop Now</button> --> */}
        </section>

        <section id="feature" className="section1">
            <Feature src="./images/FreeShipping1.jpeg" detail="Free Shipping" />
            <Feature src="./images/onlineorder2.jpeg" detail="Online Order"/>
            <Feature src="./images/SendMoney3.jpeg" detail="Send Money"/>
            <Feature src="./images/Promotions.jpeg" detail="Promotions"/>
            <Feature src="./images/support1.jpeg" detail="24/7 Support"/>
        </section>

        <section id="products" className="section1">
            <h1 id="abtitle">Featured Products</h1>
            <div className="product1">
            {data?.slice(0,8).map(createCard)}
            </div>
        </section>
        
        <section id="adstrip">
            <h3>Repair Services Available</h3>
            <h2>Minimum <span>1-Year Warranty</span> on all our products</h2>
            <button className="butt">Explore More</button>
        </section>
        
        <section id="products" className="section1">
            <h1 id="abtitle">New Arrivals</h1>
            <div className="product1">
            {data?.slice(8,16).map(createCard)}
            </div>
        </section>

        <section id="holdings" className="section1">
            <div id="holdingbox1" className="holdingbox1">
                <h3>Crazy Deals</h3>
                <h1>Buy 1 Get 1 Free</h1>
                <span>Best laptops on sale</span>
                <button className="butt">Know More</button>
            </div>
            <div id="holdingbox2" className="holdingbox1">
                <h3>Crazy Deals</h3>
                <h1>Buy 1 Get 1 Free</h1>
                <span>Best laptops on sale</span>
                <button className="butt">Know More</button>
            </div>
        </section>
        </>
    )
}

export default Home;