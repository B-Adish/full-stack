import React from 'react'
import img from "../../Assets/chair.jpg"
import { FaStar } from "react-icons/fa";
import "./Products.css"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import img1 from "../../Assets/chair1.jpg"

const Products = (props) => {
  console.log(props);
  let arraydata=props.arrays
  console.log(arraydata);
  let data1=""
  let filterdata=arraydata.filter(function (data) {
    return data.saleKey==data1
  })
  let filterdatasale=arraydata.filter(function (data) {
    return data.saleKey!=data1
  })
  console.log(filterdata);
  console.log(filterdatasale);
  
  
  return (
    <>
 {/* {filterdata.map(function (data) {
  return(
    <div className='pro1'>
    <img className='img' src={ img } alt="" />
    <div className='icons'>
      <div className='ico'><MdOutlineShoppingCartCheckout /></div>
      <div className='ico'><GoEye /></div>
      <div className='ico'><IoMdHeartEmpty /></div>
    </div>
<div className='con'>
  <div className='star'>
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  </div>
    <p>{data.name}</p>
    <p>{data.price}</p>
</div>
</div>
  )
 })} */}
 {arraydata.map(function (data) {
  return(   <div className='pro1'>
    <img className='img' src={ img1 } alt="" />
    <div className='icons'>
      <div className='ico'><MdOutlineShoppingCartCheckout /></div>
      <div className='ico'><GoEye /></div>
      <div className='ico'><IoMdHeartEmpty /></div>
    </div>
<div className='con'>
  <div className='star'>
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  </div>
    <p>{data.name}</p>
    <div className="amt">
        <del>${data.price}</del><p>$26</p>
    </div>
    <button className={data.saleKey?"sale1":"sale"}>{data.saleKey}</button>
</div>
</div>)
 })}
   
    
    </>
  )
}

export default Products