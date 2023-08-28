import React, { useEffect,useState } from "react";
import "../css/Cart.css";
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from "../context/Context";
export default function Cart() {
  const { cartItem,addToCart,setCartItem} = useGlobalContext(); //context
  const [total ,setTotal]=useState(0)
  useEffect(()=>{
    let total = 0 
    cartItem.forEach((item)=>{
     total += Number(item.price*item.count) 
    })
    setTotal(total)
  },[cartItem])
 
const navigation =  useNavigate()
  const removeCart=(id)=>{
    const updatedcart =cartItem.map((item)=>{
      if(item.id===id && item.count>1){
        return {...item, count:item.count-1}
      }
      
      else if(item.id===id && item.count<=1){
        return null;
      }
      return item;
    })
    const filtercart = updatedcart.filter((item)=>item!==null);
    setCartItem(filtercart)

  }
  return (
    <>
      <center>
        <h1>Your Cart</h1>


      </center>

      {cartItem.length === 0? (<h2 style={{textAlign:"center",marginTop:"15%"}}>Your Cart is Empty</h2>) :( <div className="cart-wrapper">
        {cartItem.map((data, index) => {
          return (
            <div className="cart" key={index}>
              <img className="image" src={data.image} alt="" />
              <div className="det">
                {data.name}
                <div>
                  <button className="add-remove" onClick={() => removeCart(data.id)} >
                    -
                  </button>
                  <input
                    className="CountInput"
                    type="num"
                    disabled
                    value={data.count}
                  />
                  <button className="add-remove" onClick={() => addToCart(data)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
<center>
<h6>Total Price $ {total}</h6>
</center>


      </div>
    
      )}
     
     <div style={{display:"flex",justifyContent:'center',
    alignContent:"center"}}>
      <button className="opt1">CheckOut</button>
      <button onClick={()=>navigation("/") }className="opt2">Continue Shopping</button>
      <br />
     
     </div>
    </>
  );
}
