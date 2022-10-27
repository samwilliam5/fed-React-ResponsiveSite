import React from 'react'
import {GiBeachBag} from 'react-icons/gi'
import {BsFillCartFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineUserAdd} from 'react-icons/ai'
import style from './Header.module.css'


const Header = () => {
  return (
    <div id={style.header}>
      <header className={style.containerheader}>
        <div className={style.header1}>
        <GiBeachBag className={style.icon1}/>
        <h2>Groco</h2>
        </div>
        <nav className={style.header2}>
            <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#features">Features</a></li>
           <li><a href="#products">Products</a></li>
           <li> <a href="#catagory ">Categories</a></li>
           <li> <a href="#review">Review</a></li>
           <li><a href="#blogs">Blogs</a></li>
           </ul>
        </nav>
        <div className={style.header3}>
          <div className={style.headicon1}>
        <BiSearchAlt2 className={style.headerI}/>
        </div>
        <div className={style.headicon2}>
        <BsFillCartFill className={style.headerI}/>
        </div>
        <div className={style.headicon3}>
        <AiOutlineUserAdd className={style.headerI}/>
        </div>
        </div>
        </header>
    </div>
  )
}

export default Header
