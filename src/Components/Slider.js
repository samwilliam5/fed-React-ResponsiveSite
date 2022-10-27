import React from 'react'
import style1 from './Slider.module.css'

const Slider = () => {
  return (
    <div id={style1.slider}>
        <div class={style1.sliderContainer}>
            <h1>Fresh And <span>   Organic</span> Products</h1>
            <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam Vitae Perspiciatis Neque Soluta.</p>
            <div class={style1.sliderBtn}>
                <button class={style1.sliderButton}>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Slider
