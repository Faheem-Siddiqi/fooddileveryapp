import React from 'react'
import "../css/Home.css"
import pizza from "../assets/PIZZA.png"
import Menu from "./Menu"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
<div className="container">
  <div className="row align-items-center text-center">
   <div className="col-lg-6  col-md-6 col-xl-6 col-xxl-6  col-sm-12  col-xs-6 " >
   <h1 style={{color:"#2D2C2E"}}>
      Pizzaiolo
    </h1>
    <p style={{color:"#2D2C2E"}}>
      From our over to your table ,nothing but the best
    </p>

    <Link to="Menu" className='ViewBtn mt-2'>
      View Menu
    </Link>
   </div>

   <div className="col-lg-6  col-md-6 col-xl-6 col-xxl-6  pt-2  col-sm-12  col-xs-6 " >
    <img style={{maxWidth:"100%"}} src={pizza} alt="piza" />
  </div>
  </div>
</div>
<Menu/>
    </>
  )
}
