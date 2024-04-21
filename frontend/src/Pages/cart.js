import {useEffect, useState} from "react"; 
import CartItem from "../Components/cartProduct"
import axios from "axios";

export default function Cart(props){
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    const [userCart,setuserCart]= useState();
    useEffect(()=>{
        axios.get(`/api/cart/${props.id}`)
        .then((res)=>setuserCart(res.data))
        .catch((err)=>console.log(err))
    },[])

    // console.log(userCart);
    // console.log(props.id);
    return (
        <>
            <section id="page-header" className="contact-header" >

            <h2>#Let's Talk</h2>
            <p>LEAVE A MESSAGE, WE LOVE TO HEAR FROM YOU!</p>

            </section>

            <section id="cart" class="section-p1">
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
                            return (<CartItem cartItem={item}/>);
                    })}
                    {/* <CartItem />
                    <CartItem />
                    <CartItem /> */}
                    {/* <tr>
                        <td><a href="/#"><i class="far fa-times-circle"></i></a></td>
                        <td><img src="./images/laptop2.jpeg" alt="" /></td>
                        <td>Redmi Note 12 Pro</td>
                        <td>$169</td>
                        <td><input type="number" value="1" /></td>
                        <td>$169</td>
                    </tr>

                    <tr>
                        <td><a href="/#"><i class="far fa-times-circle"></i></a></td>
                        <td><img src="./images/laptop2.jpeg" alt="" /></td>
                        <td>Redmi K20 Pro</td>
                        <td>$209</td>
                        <td><input type="number" value="1" /></td>
                        <td>$209</td>
                    </tr>

                    <tr>
                        <td><a href="/#"><i class="far fa-times-circle"></i></a></td>
                        <td><img src="./images/laptop2.jpeg" alt="" /></td>
                        <td>Redmi Note 6 Pro</td>
                        <td>$159</td>
                        <td><input type="number" value="1" /></td>
                        <td>$159</td>
                    </tr> */}
                </tbody>
            </table>

            </section>
                            
            <section id="cart-add" class="section-p1">
            <div id="coupon">

                <h3>APPLY COUPON</h3>
                <div>
                    <input type="text" placeholder="Enter Your COUPON" />
                    <a href="/#"><button class="normal">APPLY</button></a> 
                </div>

            </div>
            </section>

            <div id="subtotal">
                <h3>Cart Totals</h3>
                <table>
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
                </table>
                <a href="/#"><button class="normal">Proceed to checkout</button></a>

            </div>
        </>
    )
}