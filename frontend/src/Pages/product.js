import axios from "axios";
import {useState,useEffect} from "react"; 
import { useLocation } from "react-router-dom";
// import { Link } from 'react-router-dom';

export default function Product(props){

    const [productData,setData] = useState();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    const { state } = useLocation();

    useEffect(()=>{
        axios.get(`${props.apiURL}/api/product/find/`+state)
        .then(res=>setData(res.data))
        .catch((err)=>console.log(err));
    },[state]);
    //By giving empty array as second argument the useffeect hook will only run once
    //Putting state as param the effect hook will run again whenever state changes

    const [bool,setBool] = useState("false")
    
    useEffect(()=>{
        if(productData!==undefined){
            axios.put(`${props.apiURL}/api/cart/find/${props.id}`,{
                products:{productId: `${productData?._id}`} 
            })
            .then((res)=>{alert("Added to Cart")})
            .catch((err)=>console.log(err))
        }
    },[bool])
    // console.log("Data is",productData);

    return (
        <>
            <section id="prodetails" className="section-p1">
            {/* <h1>{state}</h1> */}
                <div className="single-pro-image">
                    <img src={productData?.img[0]} width="100%" className="main-img" alt="" />
                </div>

                <div className="single-pro-details">
                    <h2>{productData?.title}</h2>
                    {/* By adding ? the title will only be called if productdata is defined 
                    At first it shows initial state(i.e. nothing) and then when data is 
                    fetched it is rendered again*/}
                    {/* <h4>New 4G & 5G Mobile</h4>
                    <h2>UPTO 25% off</h2> */}
                    <select>
                    <option>4GB</option>
                    <option>6GB</option>
                    <option>8GB</option>
                    </select>
                    <input type="number" defaultValue="1" />
                    <button className="normal" onClick={()=>{setBool("true")}}>Add To Cart</button>
                    {/* <button className="normal" onClick={setBool("true")}>Add To Cart</button> */}
                    {/* If u use above statement instead the setBool is executed on rendering which sets of a loop */}
                    {/* Instead when put in a function it only executes when clicked */}
                    <h4>Product Details</h4>
                    <span>{productData?.desc}</span>

                </div>


            </section>
        </>
    )
}
