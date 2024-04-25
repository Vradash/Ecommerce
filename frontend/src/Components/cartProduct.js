import { useState , useEffect } from "react";
import axios from "axios";

export default function CartProduct(props){
    // console.log('CartProduct',props.cartItem);
    const [remove,setRemove] = useState(false);
    const [product,setProduct] = useState();

    useEffect(()=>{
        axios.get(`${props.apiURL}/api/product/find/${props.cartItem.productId}`)
        .then((res)=>setProduct(res.data))
        .catch((err)=>console.log(err.message))
    },[])

    // WORKS IN POSTMAN BUT NOT IN FRONTEND?
    useEffect(()=>{
        if(product!=undefined){
            axios.delete(`${props.apiURL}/api/cart/${props.cartId}`,{
                productId: `${product._id}`
            })
            // .then((res)=>console.log(res))
            .catch((err)=>console.log(err.message))
        }
    },[remove])
    // console.log(product)

    return (
        <tr>
            {/* <td><a href="/#"><i class="far fa-times-circle"></i></a></td> */}
            <td><img src={product?.img[0]} alt="" /></td>
            <td>{product?.head}</td>
            <td>{product?.price}</td>
            <td><input type="number" defaultValue={props.cartItem.quantity} /></td>
            <td>{`${(product?.price*props.cartItem.quantity)}`}</td>
            <td><button onClick={()=>setRemove(!remove)}>remove</button></td>
        </tr>
    )
}