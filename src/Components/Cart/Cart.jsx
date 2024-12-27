import React from 'react'
import "./Cart.css"
import logo from "../../Assets/logo-white.png"
import { IoSearchOutline } from "react-icons/io5";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import bg from "../../Assets/bg.jpeg"
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoEye } from "react-icons/go";
import Footer from "../../Components/Footer/Footer"
import { useNavigate } from 'react-router-dom';



const Cart = () => {

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
      <div className='cart'>
            <div className='nb-1'>
                <div className='logo'>
                <img className='img-home' src={logo} alt="" />
                </div>
                <div className='home-1'>
                    <h3 onClick={home}>Home <RiArrowDownSLine /></h3> 
                    <h3 onClick={shop}>Shop <RiArrowDownSLine /></h3>
                    <h3 onClick={cart}>Cart <RiArrowDownSLine /></h3>
                    <h3>Contact <RiArrowDownSLine /></h3>
                </div>
                <div className='icons-home-1'>
                    <IoSearchOutline />
                    <RiAccountPinCircleLine />
                    <FaRegHeart />
                    <MdOutlineShoppingCartCheckout />
                </div>
            </div>
      </div>
      <div className="bg">
         <img className='bg-1' src={bg} alt="" />
         <div className="cart-con">
           <h1>Bluetooth Headphone</h1>
           <div className="cart2">
              <a href="">Retbo</a>- <a href="">Products</a>- <a href="">Electronic</a>- <p>Bluetooth Headphone</p>
           </div>
         </div>
      </div>
      <div className="empty"></div>
      <div className="bh-main">
        <div className="bh">
            <img className='bh-img' src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/10-768x792.jpg" alt="" />
            <button className='sal'>SALE!</button>
          <div className="bh-con">
            <h1>Bluetooth Headphone</h1>
            <div className="bh-ico">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <div className="ico-rate">( 0 out of 5 )</div>
            </div>
            <div className='bh-amt'><del>$150</del> <p>$75</p></div>
            <p className='des'>
               La croix blog sriracha, distillery ugh small batch retro literally coloring book disrupt gochujang affogato. Edison bulb. The next generation of our icon library + toolkit is coming with more icons, more styles, more services.
            </p>
            <div className='cart'>
              <p>- 1 +</p>
              <button className='btn'>Add to Cart</button>
            </div> 
            <div className="bh-con-p">
              <IoMdHeartEmpty /><p>Add to Wishlist</p>
            </div>
            <hr />
            <div className="bh-p">
              <p><span className="sku">SKU:</span> 013</p>
              <p><span className="sku">Category:</span> Electronic</p>
              <p><span className="sku">Tags:</span> Accessories, Sport</p>
            </div>
          </div>
        </div>
      </div>
      <div className="desc">
        <div className="desc-1">
            <button className='btn-1'>Description</button>
            <button className='btn-1'>Review (0)</button>
        </div>
        <div className="rev-con">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum dignissimos at quisquam nobis dolorum quae earum esse perspiciatis voluptate voluptatibus aliquid, ratione facere molestiae magni placeat eveniet nam modi.
        </div>
        <div className="rev-con-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio quam eum quas? Nihil earum cum quo perspiciatis, quasi dicta illo repellat, maiores, laborum voluptatem pariatur saepe officiis natus accusamus. Necessitatibus porro sunt neque alias, doloremque, deserunt numquam blanditiis obcaecati cupiditate, dolores vitae autem! Voluptate debitis rerum cupiditate architecto. Illum est quisquam placeat maiores magnam temporibus dolorum voluptatibus fuga perspiciatis, accusamus non maxime officia impedit expedita officiis reprehenderit aliquam blanditiis omnis praesentium suscipit esse sed neque. Quas sunt nesciunt, temporibus placeat culpa iusto eaque eveniet recusandae voluptas deserunt, deleniti sit quod nostrum optio possimus obcaecati dolorum blanditiis sed cum est.
        </div>
      </div>
      <div className="rel-pro">
        <div className="rp">
          <h1>Related Products</h1>
          <p>Street art salvia irony wolf waistcoat actually lomo meh fap jean</p>
        </div>
        <div className='products'>
            <div className='cart-pro'>
              <img src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/4-1-600x600.jpg" alt="" />
              <button className='cart-sal'>SALE!</button>
              <div className='icons-cart'>
                <div className='ico-cart'><MdOutlineShoppingCartCheckout /></div>
                <div className='ico-cart'><GoEye /></div>
                <div className='ico-cart'><IoMdHeartEmpty /></div>
              </div>
              <div className="cart1-con">
                  <p>Luxury Brand Sport</p>
                  <div className='ico1-cart'><IoMdHeartEmpty /></div> 
              </div>
              <div className='cart-amt'>
                <del>$40</del><p>$25</p>
              </div>
            </div>
            <div className='cart-pro'>
              <img src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/1-1-600x600.jpg" alt="" />
              <button className='cart-sal'>SALE!</button>
              <div className='icons-cart'>
                <div className='ico-cart'><MdOutlineShoppingCartCheckout /></div>
                <div className='ico-cart'><GoEye /></div>
                <div className='ico-cart'><IoMdHeartEmpty /></div>
              </div>
              <div className="cart1-con">
                  <p>Luxury Brand Sport</p>
                  <div className='ico1-cart'><IoMdHeartEmpty /></div> 
              </div>
              <div className='cart-amt'>
                <del>$40</del><p>$25</p>
              </div>
            </div>
            <div className='cart-pro'>
              <img src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/3-1-600x600.jpg" alt="" />
              <button className='cart-sal'>SALE!</button>
              <div className='icons-cart'>
                <div className='ico-cart'><MdOutlineShoppingCartCheckout /></div>
                <div className='ico-cart'><GoEye /></div>
                <div className='ico-cart'><IoMdHeartEmpty /></div>
              </div>
              <div className="cart1-con">
                  <p>IOS Tablet WiFi/Celluler</p>
                  <div className='ico1-cart'><IoMdHeartEmpty /></div> 
              </div>
              <div className='cart-amt'>
                <del>$250</del><p>$191</p>
              </div>
            </div>
            <div className='cart-pro'>
              <img src="https://codeskdhaka.com/wp/retbo/wp-content/uploads/2021/01/7-600x600.jpg" alt="" />
              <button className='cart-sal'>SALE!</button>
              <div className='icons-cart'>
                <div className='ico-cart'><MdOutlineShoppingCartCheckout /></div>
                <div className='ico-cart'><GoEye /></div>
                <div className='ico-cart'><IoMdHeartEmpty /></div>
              </div>
              <div className="cart1-con">
                  <p>Gamepad Wired PC</p>
                  <div className='ico1-cart'><IoMdHeartEmpty /></div> 
              </div>
              <div className='cart-amt'>
                <del>$149</del><p>$91</p>
              </div>
            </div>
        </div>
      </div>
      <div className="empty3"><hr /></div>
      <hr />
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Cart