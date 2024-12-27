import React from 'react'
import "./Shop.css"
import logo from "../../Assets/logo-white.png"
import { IoSearchOutline } from "react-icons/io5";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import bg2 from "../../Assets/bg-shop.jpg"
import shop1 from "../../Assets/shop-1.jpg"
import shop2 from "../../Assets/shop-2.jpg"
import shop3 from "../../Assets/shop-3.jpg"
import shop4 from "../../Assets/shop-4.jpg"
import Props from "../../Components/Props/Props" 
import Footer from "../../Components/Footer/Footer"
import { useNavigate } from 'react-router-dom';


const Shop = () => {
  let shoparray= [
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/10-600x600.jpg",
      "name":"Bluetooth Headphone",
      "del_amt":"$150",
      "amt":"$75",
      "sale":"SALE!"
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/8-600x600.jpg",
      "name":"Classic Black Watch",
      "del-amt":"",
      "amt":"$91",
      "sale":""
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/2-2-600x600.jpg",
      "name":"Cotton Jersey Loose",
      "del-amt":"$76",
      "amt":"$51",
      "sale":"SALE!"
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/3-2-600x600.jpg",
      "name":"Cotton Jersey Top",
      "del-amt":"",
      "amt":"$23",
      "sale":""
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/2-600x600.jpg",
      "name":"Denim Vintage Skirt",
      "del-amt":"",
      "amt":"$30",
      "sale":""
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/4-600x600.jpg",
      "name":"Designer Handbag",
      "del-amt":"$500",
      "amt":"$371",
      "sale":"SALE!"
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/8-3-600x600.jpg",
      "name":"Digital LCD Temperature",
      "del-amt":"$50",
      "amt":"$37",
      "sale":"SALE!"
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/1-4-600x600.jpg",
      "name":"Fresh Green Cucumber",
      "del-amt":"",
      "amt":"$21",
      "sale":""
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/6-2-600x600.jpg",
      "name":"Fresh Green Grapes",
      "del-amt":"$45",
      "amt":"$30",
      "sale":"SALE!"
    }
  ]

  let navigate = useNavigate()
  
    function home() {
      navigate('/')
    }
  
  
    function shop() {
      navigate('/Shop')
    }
  
    function cart() {
      navigate('/Cart')
    } 

  return (
    <>
      <div className='shop'>
            <div className='nb-2'>
                <div className='logo-shop'>
                <img className='img-shop' src={logo} alt="" />
                </div>
                <div className='home-2'>
                    <h3 onClick={home}>Home <RiArrowDownSLine /></h3> 
                    <h3 onClick={shop}>Shop <RiArrowDownSLine /></h3>
                    <h3 onClick={cart}>Cart <RiArrowDownSLine /></h3>
                    <h3>Contact <RiArrowDownSLine /></h3>
                </div>
                <div className='icons-home-2'>
                    <IoSearchOutline />
                    <RiAccountPinCircleLine />
                    <FaRegHeart />
                    <MdOutlineShoppingCartCheckout />
                </div>
            </div>
      </div>
      <div className="bg-shop">
         <img className='bg-2' src={bg2} alt="" />
         <div className="shop-con">
           <h1>SHOP</h1>
           <div className="shop2">
              <a href="">Retbo</a>- <p>Shop</p>
           </div>
         </div>
      </div>
      <div className="empty-shop"></div>
      <div className="main">
        <div className="main-1">
          <div className="filters">
            <div className="cat">
              <h3>Categories</h3>
              <div className="cat-con">
                <p>Clock</p>
                <p>Consultant</p>
                <p>News</p>
                <p>Technology</p>
              </div>
            </div>
            <div className="range">
              <h3>Filter by Price</h3>
              <div className="ranges">
                <input className='type' type="range" />
              </div>
              <div className="pri">
                <button className='fil'>Filter</button>
                <p>Price: $10-$300</p>
              </div>
            </div>
            <div className="pro-shop">
              <div className="pro-sh">
                <h3>Products</h3>
              </div>
              <div className="shop-pro">
                <img className='img-pro' src={ shop1 } alt="" />
                <div className="img-con">
                  <p>Sunscreen Gloves 2</p>
                  <h3>$60</h3>
                </div>
              </div>
              <div className="shop-pro">
                <img className='img-pro' src={ shop2 } alt="" />
                <div className="img-con">
                  <p>Transparent Cute Mug 2</p>
                  <h3>$50</h3>
                </div>
              </div>
              <div className="shop-pro">
                <img className='img-pro' src={ shop3 } alt="" />
                <div className="img-con">
                  <p>Organic Hass Apple</p>
                  <h3>$30</h3>
                </div>
              </div>
              <div className="shop-pro">
                <img className='img-pro' src={ shop4 } alt="" />
                <div className="img-con">
                  <p>Organic Hass Avocado</p>
                  <h3>$40</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="allpro">
            <Props
            productarray={shoparray}
            />
          </div>
        </div>
      </div>
      <hr />
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Shop