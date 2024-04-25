// import {useEffect} from "react"; 
import { useState , useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../Components/productCards.js';

// let categories=["Smartphone","Laptop","HeadPhone"];


function createCard(temp){
    return (
      <ProductCard 
      key={temp._id}
      id={temp._id}
      cardImg={temp.img[0]}
    //   cardComp={temp.cardComp}
      cardName={temp.head}
      cardPrice={temp.price}/>
    );
};

// function categorySetter(e){
//     let val=e.target.innerText.toLowerCase()
//     setCategory(val)
//     console.log(val.toLowerCase());
// }

export default function Blog(props){
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    const [data,setData] = useState([]);
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("all");

    function categorySetter(e){
        let val=e.target.innerText.toLowerCase()
        setCategory(val);
    }
    function companySetter(e){
        let val=e.target.innerText;
        setCompany(val);
    }

    useEffect(() => {
        axios.get(`${props.apiURL}/api/product?category=${category}&company=${company}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[category,company]);

    // console.log(category,company);
    return (
        <div id="shop-products">
            <div className="dropdown">
                <h2>Filter</h2>
                <div className="dropdown-content">
                    <div>
                        <h3>Category</h3>
                        <ul id="list">
                            <li onClick={categorySetter}>Smartphone</li>
                            <li onClick={categorySetter}>Laptop</li>
                            <li onClick={categorySetter}>HeadPhone</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3>Company</h3>
                        <ul>
                            {/* <li onClick={(e)=>{setCompany(`${e.target.innerText}`)}}>Apple</li> */}
                            <li onClick={companySetter}>Apple</li>
                            <li onClick={companySetter}>HP</li>
                            <li onClick={companySetter}>Motorola</li>
                            <li onClick={companySetter}>Acer</li>
                            <li onClick={companySetter}>Asus</li>
                            <li onClick={companySetter}>Lenovo</li>
                            <li onClick={companySetter}>JBL</li>
                            <li onClick={()=>{setCompany("all")}}>Show All</li>
                            {/* <li>Acer</li> */}
                        </ul>
                    </div>
                    
                    <div>
                        <select id="">
                            <option value="red">red</option>
                            <option value="blue">blue</option>
                            <option value="black">black</option>
                        </select>  
                    </div>
                    

                </div>
            </div>
            <div className="product1">
                {data.map(createCard)}
            </div>
        </div>
    )
}