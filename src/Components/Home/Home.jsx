import React from 'react'
import "./Home.css"
import logo from "../../Assets/logo-white.png"
import { IoSearchOutline } from "react-icons/io5";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import img1 from "../../Assets/slider-home-three-1.jpg"
import { FaStar } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import Footer from "../../Components/Footer/Footer"
import Props from '../Props/Props';
import cur from "../../Assets/cur.jpg"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let shoparray= [
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/6-1-768x792.jpg",
      "name":"Jacquard Chair Cushion",
      "del_amt":"$150",
      "amt":"$75",
      "sale":"SALE!"
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/12-768x792.jpg",
      "name":"Super Thick Cotton",
      "del-amt":"",
      "amt":"$91",
      "sale":""
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/7-1-768x792.jpg",
      "name":"Transparent Cute Mug 2",
      "del-amt":"$76",
      "amt":"$51",
      "sale":"SALE!"
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/9-1-768x792.jpg",
      "name":"Outdoor Camping Chair",
      "del-amt":"",
      "amt":"$23",
      "sale":""
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/10-1-768x792.jpg",
      "name":"Modern Art Resin",
      "del-amt":"",
      "amt":"$30",
      "sale":""
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/8-2-768x792.jpg",
      "name":"Hardware Set Wall",
      "del-amt":"$500",
      "amt":"$371",
      "sale":"SALE!"
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/4-2-768x792.jpg",
      "name":"Loose Oversized Mug",
      "del-amt":"$50",
      "amt":"$37",
      "sale":"SALE!"
    },
    {
      "img":"https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/3-2-768x792.jpg",
      "name":"Outdoor Camping Chair",
      "del-amt":"",
      "amt":"$21",
      "sale":""
    },
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
    <div className='nb'>
        <div className='logo'>
           <img className='img-home' src={logo} alt="" />
        </div>
        <div className='home'>
            <h3 onClick={home}>Home <RiArrowDownSLine /></h3> 
            <h3 onClick={shop}>Shop <RiArrowDownSLine /></h3>
            <h3 onClick={cart}>Cart <RiArrowDownSLine /></h3>
            <h3>Contact <RiArrowDownSLine /></h3>
        </div>
        <div className='icons-home'>
            <IoSearchOutline />
            <RiAccountPinCircleLine />
            <FaRegHeart />
            <MdOutlineShoppingCartCheckout />
        </div>
    </div>
    <div className='retbo'>
        <div className='con-home'>
            <h1>
                Get Exclusive Offers And Claim Free Shipping <br />
                Only On Registration Now!!!
            </h1>
        </div>
        <div className='img1'>
          <img className='img2' src={ img1 } alt="" />
        </div>
        <div className='pro'>
          <h1>Handpick Products Browse </h1>
          <h3>Top Collection Of Our Products</h3>
        </div>
    </div>
    <div className="home-pro">
      <div className="home1-pro">
        <img className='home-img' src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/6-1-768x792.jpg" alt="" />
        <button className='home-sal'>SALE</button>
        <div className='home-icons'>
          <div className='home-ico'><MdOutlineShoppingCartCheckout /></div>
          <div className='home-ico'><GoEye /></div>
          <div className='home-ico'><IoMdHeartEmpty /></div>
       </div>
        <div className="stars-home">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>Jacquard Chair Cushion</p>
        <div className="del-home">
          <del>$150</del> $80
        </div>
      </div>
      <div className="home1-pro">
        <img className='home-img' src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/12-768x792.jpg" alt="" />
        <div className='home-icons'>
          <div className='home-ico'><MdOutlineShoppingCartCheckout /></div>
          <div className='home-ico'><GoEye /></div>
          <div className='home-ico'><IoMdHeartEmpty /></div>
       </div>
        <div className="stars-home">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>Super Thick Cotton</p>
        <div className="del-home">
          $26
        </div>
      </div>
      <div className="home1-pro">
        <img className='home-img' src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/7-1-768x792.jpg" alt="" />
        <button className='home-sal'>SALE</button>
        <div className='home-icons'>
          <div className='home-ico'><MdOutlineShoppingCartCheckout /></div>
          <div className='home-ico'><GoEye /></div>
          <div className='home-ico'><IoMdHeartEmpty /></div>
       </div>
        <div className="stars-home">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>Transparent Cute Mug 2</p>
        <div className="del-home">
          <del>$90</del> $50
        </div>
      </div>
      <div className="home1-pro">
        <img className='home-img' src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/6-1-768x792.jpg" alt="" />
        <div className='home-icons'>
          <div className='home-ico'><MdOutlineShoppingCartCheckout /></div>
          <div className='home-ico'><GoEye /></div>
          <div className='home-ico'><IoMdHeartEmpty /></div>
       </div>
        <div className="stars-home">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>Outddor Camping Chair</p>
        <div className="del-home">
          $25
        </div>
      </div>
    </div>
    <div className="ks">
      <div className="ks-1">
        <div className="store">
          <img className='store-img' src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/shop-img-3.jpg" alt="" />
          <button className='allpro1'>All Product</button>
        </div>
        <div className="new-arr">
          <div className="img2-arr123">
             <img className='arr-img123' src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/banner-img-8.jpg" alt="" />
          </div>
          <div className="arr">
            <p>Get upto 60% Discount Now!</p>
            <h1>New Arrivals Office Collection 2020</h1>
          </div>
          <div className="vp">
            <button className='vp-btn'>View Product</button>
          </div>
        </div>
      </div>
    </div>
    <div className="pf">
      <div className="pop-fur">
        <h1>Popular Furniture</h1>
        <h3>Most Favourite Products are Available!</h3>
      </div>
      <div className="mul-img">
        <Props
        productarray={shoparray}
        />
      </div>
    </div>
    <div className="cur">
      <img className='cur-img' src={cur} alt="" />
      <div className="cur-con">
        <h1>40% Flat on Subscription</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus iusto consequuntur </p>
        <div className="emails-sub">
          <input className='emails' type="email" placeholder='Enter an Email Address' name='email' />
          <button className='snd-btn'>SEND</button>
        </div>
      </div>
    </div>

    <hr />


        <Footer/> 
    
    </>
  )
}

export default Home