import React from 'react'
import "./Props.css"
import { IoMdHeartEmpty } from "react-icons/io";
import { GoEye } from "react-icons/go";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


const Props = (props) => {
    let myprops=props.productarray
    console.log(props);
    let data1=""
    let filterdata=myprops.filter(function (data) {
        return data.sale==data1
    })
    let filterdatasale=myprops.filter(function (data) {
        return data.sale!=data1
    })
    let delamt=""
    let filteramt=myprops.filter(function (data) {
      return data.del_amt==delamt
    })
    let filteramt1=myprops.filter(function (data) {
      return data.del_amt!==delamt
    })

    console.log(filterdata);
    console.log(filterdatasale);
    console.log(filteramt);
    console.log(filteramt1);
    
    
    
    
    
  return (
    <>
    {myprops.map(function (data) {
        return(<div className="props">
            <div className='props-pro'>
                    <img src={data.img} alt="" />
                    <button className={data.sale==""?"sale":"sale1"}>{data.sale}</button>
                    <div className='icons-props'>
                      <div className='ico-props'><MdOutlineShoppingCartCheckout /></div>
                      <div className='ico-props'><GoEye /></div>
                      <div className='ico-props'><IoMdHeartEmpty /></div>
                    </div>
                    <div className="props-con">
                        <p>{data.name}</p>
                        <div className='ico1-props'><IoMdHeartEmpty /></div> 
                    </div>
                    <div className='props-amt'>
                      <del className={data.del_amt==""?"del_amt":"del_amt1"}>{data.del_amt}</del><p>{data.amt}</p>
                    </div>
                  </div>
          </div>)
    })}
    </>
  )
}

export default Props