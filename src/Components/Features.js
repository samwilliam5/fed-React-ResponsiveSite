import React from 'react'
import style2 from './Features.module.css'
import featuresimg1 from '../image/feature-img-1.png'
import featuresimg2 from '../image/feature-img-2.png'
import featuresimg3 from '../image/feature-img-3.png'


const Features = () => {
  return (
    <div id='features'>
        <div className={style2.featurestop}>
        <h1>Our <span> Features</span></h1>
        </div>
    <div className={style2.featurescontainer}>
        <div className={style2.featuresBox1}>
            <div> <img src={featuresimg1} alt="" /></div>
            <div>
                <h3>Fresh And Organic</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!</p>
                <div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div className={style2.featuresBox2} >
            <div> <img src={featuresimg2} alt="" /></div>
            <div>
                <h3>Free Delivery</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!</p>
                <div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div className={style2.featuresBox3}>
            <div> <img src={featuresimg3} alt="" /></div>
            <div>
                <h3>Easy Payment</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!</p>
                <div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Features
