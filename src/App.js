import React from 'react'
import Home from "./Components/Home/Home"
import Products from "./Components/Products/Myproduct"
import Cart from "./Components/Cart/Cart"
import Props from "./Components/Props/Props"
import Login from "./Components/Login/Login"
import "./App.css"
import Shop from './Components/Shop/Shop'
import Footer from './Components/Footer/Footer'
import Routing from './Components/Routing/Routing' 
import Addtocart from "./Components/AddtoCart/Addtocart"

const App = () => {
  
    // let products=[
    //   {
    //     "id": 1,
    //     "name": "Modern Sofa",
    //     "price": 799.99,
    //     "description": "A sleek, modern sofa with comfortable cushions and a minimalist design.",
    //     "rating": 4.5,
    //     "saleKey": "SALE20",
    //     "extraDetails": "Available in grey and beige.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Leather"},
    //       {"key": "Dimensions", "value": "80x35x30 inches"},
    //       {"key": "Warranty", "value": "2 years"}
    //     ]
    //   },
    //   {
    //     "id": 2,
    //     "name": "Classic Wooden Dining Table",
    //     "price": 499.99,
    //     "description": "A timeless wooden dining table, perfect for family dinners.",
    //     "rating": 4.7,
    //     "saleKey": "SALE15",
    //     "extraDetails": "Seats up to 6 people.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Oak Wood"},
    //       {"key": "Dimensions", "value": "60x36x30 inches"},
    //       {"key": "Warranty", "value": "5 years"}
    //     ]
    //   },
    //   {
    //     "id": 3,
    //     "name": "Luxury Bed Frame",
    //     "price": 999.99,
    //     "description": "A premium wooden bed frame with elegant carvings.",
    //     "rating": 4.8,
    //     "saleKey": "SALE25",
    //     "extraDetails": "Fits a king-sized mattress.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Mahogany"},
    //       {"key": "Dimensions", "value": "80x80x50 inches"},
    //       {"key": "Warranty", "value": "3 years"}
    //     ]
    //   },
    //   {
    //     "id": 4,
    //     "name": "Contemporary Coffee Table",
    //     "price": 229.99,
    //     "description": "A simple yet elegant coffee table with a glass top.",
    //     "rating": 4.3,
    //     "saleKey": "SALE10",
    //     "extraDetails": "Available in black and white.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Glass and Metal"},
    //       {"key": "Dimensions", "value": "40x20x15 inches"},
    //       {"key": "Warranty", "value": "1 year"}
    //     ]
    //   },
    //   {
    //     "id": 5,
    //     "name": "Ergonomic Office Chair",
    //     "price": 189.99,
    //     "description": "An ergonomic office chair with lumbar support and adjustable height.",
    //     "rating": 4.6,
    //     "saleKey": "SALE30",
    //     "extraDetails": "Available in black, grey, and blue.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Mesh Fabric"},
    //       {"key": "Dimensions", "value": "25x25x45 inches"},
    //       {"key": "Warranty", "value": "2 years"}
    //     ]
    //   },
    //   {
    //     "id": 6,
    //     "name": "Recliner Armchair",
    //     "price": 649.99,
    //     "description": "A plush recliner with adjustable reclining angles and cup holders.",
    //     "rating": 4.7,
    //     "saleKey": "SALE35",
    //     "extraDetails": "Available in leather and fabric finishes.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Leather/Fabric"},
    //       {"key": "Dimensions", "value": "35x35x40 inches"},
    //       {"key": "Warranty", "value": "3 years"}
    //     ]
    //   },
    //   {
    //     "id": 7,
    //     "name": "Stylish TV Stand",
    //     "price": 399.99,
    //     "description": "A stylish TV stand with storage for your media devices.",
    //     "rating": 4.4,
    //     "saleKey": "SALE10",
    //     "extraDetails": "Has 3 open shelves and 2 closed cabinets.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Wood and Metal"},
    //       {"key": "Dimensions", "value": "55x20x24 inches"},
    //       {"key": "Warranty", "value": "1 year"}
    //     ]
    //   },
    //   {
    //     "id": 8,
    //     "name": "Minimalist Desk",
    //     "price": 299.99,
    //     "description": "A modern, minimalist desk with ample workspace.",
    //     "rating": 4.6,
    //     "saleKey": "SALE20",
    //     "extraDetails": "Comes with built-in cable management.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Wood and Steel"},
    //       {"key": "Dimensions", "value": "48x24x30 inches"},
    //       {"key": "Warranty", "value": "2 years"}
    //     ]
    //   },
    //   {
    //     "id": 9,
    //     "name": "Leather Lounge Chair",
    //     "price": 799.99,
    //     "description": "A luxurious leather lounge chair designed for relaxation.",
    //     "rating": 4.9,
    //     "saleKey": "SALE50",
    //     "extraDetails": "Available in brown and black leather.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Leather and Wood"},
    //       {"key": "Dimensions", "value": "35x35x38 inches"},
    //       {"key": "Warranty", "value": "5 years"}
    //     ]
    //   },
    //   {
    //     "id": 10,
    //     "name": "Kids Bunk Bed",
    //     "price": 399.99,
    //     "description": "A fun and space-saving bunk bed perfect for kids.",
    //     "rating": 4.4,
    //     "saleKey": "SALE15",
    //     "extraDetails": "Includes safety rails and ladder.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Wood"},
    //       {"key": "Dimensions", "value": "80x40x60 inches"},
    //       {"key": "Warranty", "value": "3 years"}
    //     ]
    //   },
    //   {
    //     "id": 11,
    //     "name": "Modular Bookshelf",
    //     "price": 499.99,
    //     "description": "A customizable bookshelf that can be arranged in multiple configurations.",
    //     "rating": 4.5,
    //     "saleKey": "SALE25",
    //     "extraDetails": "Available in walnut and oak finishes.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Wood"},
    //       {"key": "Dimensions", "value": "72x12x72 inches"},
    //       {"key": "Warranty", "value": "1 year"}
    //     ]
    //   },
    //   {
    //     "id": 12,
    //     "name": "Swivel Office Chair",
    //     "price": 159.99,
    //     "description": "A swivel office chair with adjustable height and lumbar support.",
    //     "rating": 4.3,
    //     "saleKey": "SALE10",
    //     "extraDetails": "Available in black and grey.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Mesh and Plastic"},
    //       {"key": "Dimensions", "value": "22x22x40 inches"},
    //       {"key": "Warranty", "value": "2 years"}
    //     ]
    //   },
    //   {
    //     "id": 13,
    //     "name": "Compact End Table",
    //     "price": 149.99,
    //     "description": "A compact end table that fits perfectly next to a sofa or chair.",
    //     "rating": 4.2,
    //     "saleKey": "SALE5",
    //     "extraDetails": "Available in multiple finishes.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Wood"},
    //       {"key": "Dimensions", "value": "20x20x22 inches"},
    //       {"key": "Warranty", "value": "1 year"}
    //     ]
    //   },
    //   {
    //     "id": 14,
    //     "name": "Upholstered Ottoman",
    //     "price": 179.99,
    //     "description": "A soft, upholstered ottoman with a stylish tufted design.",
    //     "rating": 4.6,
    //     "saleKey": "SALE15",
    //     "extraDetails": "Available in grey and navy blue.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Fabric and Foam"},
    //       {"key": "Dimensions", "value": "30x30x18 inches"},
    //       {"key": "Warranty", "value": "1 year"}
    //     ]
    //   },
    //   {
    //     "id": 15,
    //     "name": "Outdoor Lounge Set",
    //     "price": 1299.99,
    //     "description": "A complete outdoor lounge set, perfect for your backyard.",
    //     "rating": 4.8,
    //     "saleKey": "",
    //     "extraDetails": "Includes 2 chairs, a loveseat, and a coffee table.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Rattan and Cushions"},
    //       {"key": "Dimensions", "value": "Chairs: 30x30x28 inches, Loveseat: 60x30x28 inches"},
    //       {"key": "Warranty", "value": "3 years"}
    //     ]
    //   },
    //   {
    //     "id": 16,
    //     "name": "Industrial Bar Stools",
    //     "price": 149.99,
    //     "description": "A set of 2 industrial-style bar stools with adjustable height.",
    //     "rating": 4.4,
    //     "saleKey": "",
    //     "extraDetails": "Available in metal and wood finishes.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Metal and Wood"},
    //       {"key": "Dimensions", "value": "16x16x30 inches"},
    //       {"key": "Warranty", "value": "1 year"}
    //     ]
    //   },
    //   {
    //     "id": 17,
    //     "name": "Storage Cabinet",
    //     "price": 249.99,
    //     "description": "A sturdy storage cabinet for organizing your belongings.",
    //     "rating": 4.3,
    //     "saleKey": "",
    //     "extraDetails": "Has 4 shelves and 2 drawers.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Wood"},
    //       {"key": "Dimensions", "value": "30x18x60 inches"},
    //       {"key": "Warranty", "value": "2 years"}
    //     ]
    //   },
    //   {
    //     "id": 18,
    //     "name": "Entryway Console Table",
    //     "price": 179.99,
    //     "description": "A sleek console table perfect for your entryway.",
    //     "rating": 4.7,
    //     "saleKey": "SALE30",
    //     "extraDetails": "Available in a variety of colors.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Wood and Metal"},
    //       {"key": "Dimensions", "value": "48x14x30 inches"},
    //       {"key": "Warranty", "value": "1 year"}
    //     ]
    //   },
    //   {
    //     "id": 19,
    //     "name": "Wall-Mounted Shelves",
    //     "price": 99.99,
    //     "description": "A set of 3 wall-mounted floating shelves for display or storage.",
    //     "rating": 4.5,
    //     "saleKey": "",
    //     "extraDetails": "Easy to install.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Wood"},
    //       {"key": "Dimensions", "value": "24x8x6 inches"},
    //       {"key": "Warranty", "value": "1 year"}
    //     ]
    //   },
    //   {
    //     "id": 20,
    //     "name": "Adjustable Standing Desk",
    //     "price": 349.99,
    //     "description": "An ergonomic standing desk with adjustable height.",
    //     "rating": 4.8,
    //     "saleKey": "",
    //     "extraDetails": "Perfect for home offices.",
    //     "productDetails": [
    //       {"key": "Material", "value": "Wood and Steel"},
    //       {"key": "Dimensions", "value": "48x24x28-45 inches"},
    //       {"key": "Warranty", "value": "3 years"}
    //     ]
    //   }
    // ]
  
  return (
    <div className='App'>
      
    {/* <div className='gridmain'>
    <div className='grids'>
     <Products arrays={ products}/>
     </div>
    </div> */}

    {/* <Home/>
    <Cart/> */}
    {/* <Shop/> */}
    {/* <Footer/> */}
    {/* <Props/> */}
    {/* <Login/> */}

    <Routing/>

    {/* <Addtocart/> */}
    </div>
  )
}

export default App
