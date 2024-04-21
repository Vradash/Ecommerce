import { useState , useEffect } from "react";
import axios from "axios";

export default function CartProduct(props){
    // console.log('CartProduct',props.cartItem);
    const [product,setProduct] = useState();

    useEffect(()=>{
        axios.get(`/api/product/find/${props.cartItem.productId}`)
        .then((res)=>setProduct(res.data))
        .catch((err)=>console.log(err.message))
    },[])
    // console.log(product)

    return (
        <tr>
            {/* <td><a href="/#"><i class="far fa-times-circle"></i></a></td> */}
            <td><img src={product?.img[0]} alt="" /></td>
            <td>{product?.head}</td>
            <td>{product?.price}</td>
            <td><input type="number" defaultValue={props.cartItem.quantity} /></td>
            <td>{(product?.price)*2}</td>
            <td><button>remove</button></td>
        </tr>
    )
}