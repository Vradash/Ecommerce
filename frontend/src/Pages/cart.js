import {useEffect, useState} from "react"; 
import CartItem from "../Components/cartProduct"
import axios from "axios";

export default function Cart(props){
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    const [userCart,setuserCart]= useState(null);

    useEffect(()=>{
        axios.post(`${props.apiURL}/api/cart`,{
            userId: `${props.id}`,
        })
        // .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
    },[])

    useEffect(()=>{
        axios.get(`${props.apiURL}/api/cart/${props.id}`)
        .then((res)=>setuserCart(res.data))
        .catch((err)=>console.log(err))
    },[])

    // useEffect(()=>{
    //     if(userCart===null){
    //         axios.get(`${props.apiURL}/api/cart`)
    //         .then((res)=>setuserCart(res.data))
    //         .catch((err)=>console.log(err))
    //     }
    // },[])

    // console.log(userCart);
    // console.log(props.id);
    return (
        <>
            <section id="page-header" className="contact-header" >

            <h2>#Let's Talk</h2>
            <p>LEAVE A MESSAGE, WE LOVE TO HEAR FROM YOU!</p>

            </section>

            <section id="cart" className="section-p1">
            <table>
                <thead>
                    <tr>
                        {/* <td>Remove</td> */}
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                    {userCart?.products.map((item)=>{
                            return (<CartItem 
                            key={item.productId} 
                            cartItem={item} 
                            apiURL={props.apiURL}
                            cartId={userCart._id}
                            />);
                    })}
                </tbody>
            </table>

            </section>
                            
            <section id="cart-add" className="section-p1">
            <div id="coupon">

                <h3>APPLY COUPON</h3>
                <div>
                    <input type="text" placeholder="Enter Your COUPON" />
                    <a href="/#"><button className="normal">APPLY</button></a> 
                </div>

            </div>
            </section>

            <div id="subtotal">
                <h3>Cart Totals</h3>
                <table>
                    <tbody>
                        <tr>
                        <td>Cart Subtotal</td>
                        <td>$537</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Totals</strong></td>
                        <td><strong>$537</strong></td>
                    </tr>
                    </tbody>
                    
                </table>
                <a href="/#"><button className="normal">Proceed to checkout</button></a>

            </div>
        </>
    )
}