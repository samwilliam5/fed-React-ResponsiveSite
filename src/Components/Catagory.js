import React from 'react'
import { useNavigate } from 'react-router-dom'
import catagory1 from '../image/cat-1.png'
import catagory2 from '../image/cat-2.png'
import catagory3 from '../image/cat-3.png'
import catagory4 from '../image/cat-4.png'
import style4 from './Catagory.module.css'



const Catagory = () => {
    const navigate=useNavigate()

const shop1=(e)=>{
    e.preventDefault()
    navigate('/shop1')
}
const shop2=(e)=>{
    e.preventDefault()
    navigate('/shop2')
}
const shop3=(e)=>{
    e.preventDefault()
    navigate('./shop3')
}
const shop4=(e)=>{
    e.preventDefault()
    navigate('./shop4')
}

  return (
    <div id='catagory'>
    <h1>Our <span> Catagory</span></h1>
      <div className={style4.catagoryContainer}>
        <div className={style4.catagorybox1}>
            <div>
                <img src={catagory1} alt="" srcset="" />
            </div>
            <div>
                <p>Vegetables</p>
                <div>
                    <span>Upto 45% Off</span>
                </div>
                <div>
                    <button onClick={shop1}>Shop Now</button>
                </div>
            </div>
          
        </div>
     
      <div className={style4.catagorybox2}>
            <div>
                <img src={catagory2} alt="" srcset="" />
            </div>
            <div>
                <p>Fresh Fruits</p>
                <div>
                    <span>Upto 45% Off</span>
                </div>
                <div>
                    <button  onClick={shop2}>Shop Now</button>
                </div>
            </div>
        </div>
        <div className={style4.catagorybox3}>
            <div>
                <img src={catagory3} alt="" srcset="" />
            </div>
            <div>
                <p>Dairy Products</p>
                <div>
                    <span>Upto 45% Off</span>
                </div>
                <div>
                    <button  onClick={shop3}>Shop Now</button>
                </div>
            </div>
            </div>
            <div className={style4.catagorybox4}>
            <div>
                <img src={catagory4} alt="" srcset="" />
            </div>
            <div>
                <p>Freshh Meat</p>
                <div>
                    <span>Upto 45% Off</span>
                </div>
                <div>
                    <button  onClick={shop4}>Shop Now</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Catagory
