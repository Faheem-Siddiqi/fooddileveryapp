import React, { useState,useRef, useEffect } from "react";
import data from "../data/data.json";
import {motion} from "framer-motion"
import "../css/Menu.css";
import {useGlobalContext} from "../context/Context"
export default function Menu() {

  const {addToCart}= useGlobalContext() //context


  //we have a a json that have key of object those key are menu like pizza salat sausage and key have further array of objects in data folder
  const [selectedDish, setSelectedDish] = useState("pizza"); //
  let menu = Object.getOwnPropertyNames(data);
  //This is a built-in JavaScript method that returns an array of property names (keys) of an object.



  const slide = useRef(null)
  const innerSlide = useRef(null)

  const [width,setWidth]= useState(0)

useEffect(()=>{
 setWidth(slide.current.scrollWidth  - slide.current.offsetWidth)
 setTimeout(
  ()=>{
innerSlide.current.style.transform = "translateX(0)"
  },5
)
},[setSelectedDish])


  const handleClick = (Data) => {
    //getting name of menu
    setSelectedDish(Data);
    setTimeout(
      ()=>{
 innerSlide.current.style.transform = "translateX(0)"
      },5
    )
   
  };
  const MenuDetails = data[selectedDish].map((MenuData, index) => {
    return (
    
      <motion.div className="MenuContainer  m-5" key={index}>
        <motion.img  className="img-fluid  MenuImage" src={MenuData.image} alt="iamge " />
        <motion.h6 style={{ color: " #ee0847" }}>{MenuData.name}</motion.h6>
        <motion.p>{MenuData.description}</motion.p>
        <motion.p>Price: ${MenuData.price}</motion.p>
        <button  className="buyButton" onClick={()=>addToCart(MenuData)}>
          Add to Cart
        </button>
      </motion.div> 
    );
  });
  // TO displayy key values (menu catagory)
  let output = menu.map((Data, index) => {
    return (
      <span key={index} onClick={() => handleClick(Data)} className="Menu">
        {Data}
      </span>
    );
  });
  return (

    <>
      <h2 className="text-center mt-2 ">Menu</h2>
      <div className=" MenuOpt mt-2">{output}</div>
     
      
<motion.div    ref={slide} whileTap={{cursor:"grabbing"}}>
<motion.div  ref={innerSlide}  drag="x" dragConstraints={{right:width,left:-width}}  className="PC" 
      >{MenuDetails}
      </motion.div>
</motion.div>
     
    </>
  );
}
