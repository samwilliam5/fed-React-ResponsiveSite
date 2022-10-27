import React from 'react'
import { AiFillFacebook} from 'react-icons/ai'
import { AiFillTwitterCircle} from 'react-icons/ai'
import { AiFillInstagram} from 'react-icons/ai'
import { AiFillLinkedin} from 'react-icons/ai'
import { AiFillPhone} from 'react-icons/ai'
import { BsMessenger} from 'react-icons/bs'
import { BiCurrentLocation} from 'react-icons/bi'
import { AiOutlineArrowRight} from 'react-icons/ai'
import { FaCcVisa} from 'react-icons/fa'
import { FaCcMastercard} from 'react-icons/fa'
import { FaCcAmazonPay} from 'react-icons/fa'
import { FaCcPaypal} from 'react-icons/fa'
import { GiBeachBag} from 'react-icons/gi'
import style7 from './Topfooter.module.css'

const Topfooter = () => {
  return (
    <div id={style7.topfooter}>
      <div className={style7.topfooterContainer}>
        <div className={style7.topfooterbox1}>
            <h3>        <GiBeachBag   className='iconsfooter'/>Groco</h3>
            <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus, Laudantium?</p>
            <AiFillFacebook className='iconsfooter'/>  <AiFillTwitterCircle className='iconsfooter'/> <AiFillInstagram className='iconsfooter'/> <AiFillLinkedin className='iconsfooter'/>
        </div>
        <div className={style7.topfooterbox2}>
            <h3>Contact Info</h3>
            <ul>
                <li><AiFillPhone className='iconsfooter'/>+123 456 98790</li>
                <li><AiFillPhone className='iconsfooter'/>+665 777 9850</li>
                <li><BsMessenger className='iconsfooter'/>william999@gmail.com</li>
                <li><BiCurrentLocation className='iconsfooter'/> Chicago,USA</li>
            </ul>
           
        </div>
        <div className={style7.topfooterbox3}>
            <h3>Quick Info</h3>
            <ul>
                <li><a href="#"> <AiOutlineArrowRight className='iconsfooter'/> Home</a> </li>
                <li><a href="#features"><AiOutlineArrowRight className='iconsfooter'/>Features</a> </li>
                <li><a href="#products"><AiOutlineArrowRight className='iconsfooter'/>Products</a> </li>
                <li><a href="#catagory"><AiOutlineArrowRight className='iconsfooter'/>Categories</a> </li>
                <li><a href="#review"><AiOutlineArrowRight className='iconsfooter'/>Reviews</a> </li>
                <li><a href="#blogs"><AiOutlineArrowRight className='iconsfooter'/>Blogs</a> </li>
            </ul>
        </div>
        <div className={style7.topfooterbox4}>
            <h3>Newsletter</h3>
            <p>Subscribe For Latest Updates

</p>
            <div>
                <input type="text" placeholder='Enter a email'/>
            </div>
            <button>Subscribe</button>
            <div>
            <FaCcVisa className='iconsfooter' id='i1'/>
            <FaCcMastercard className='iconsfooter' id='i1' />
            <FaCcAmazonPay className='iconsfooter' id='i1'/>
            <FaCcPaypal className='iconsfooter' id='i1'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topfooter
