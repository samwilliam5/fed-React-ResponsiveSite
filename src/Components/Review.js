import React from 'react'
import reviewimg1 from '../image/pic-1.png'
import reviewimg2 from '../image/pic-2.png'
import reviewimg3 from '../image/pic-3.png'
import style5 from './Review.module.css'

const Review = () => {
  return (
    <div id='review'>
                                <h1>Customer's <span> Review</span></h1>

      <div className={style5.reviewContainer}>
        <div className={style5.reviewbox1}>
            <div>
                <img src={reviewimg1} alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea eaque corporis consectetur est amet nam quos, accusantium minus alias quaerat sequi vel blanditiis commodi cupiditate quasi repellat praesentium facilis.</p>
                <h3>John Doe</h3>
            </div>
        </div>
        <div className={style5.reviewbox2}>
            <div>
                <img src={reviewimg2} alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ab dolores ipsa in sint sapiente reiciendis neque repellendus libero temporibus velit quas, obcaecati animi magnam doloribus ad omnis numquam tempora.</p>
                <h3>Peter Parker</h3>
            </div>
        </div>
        <div className={style5.reviewbox3}>
            <div>
                <img src={reviewimg3} alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda fuga enim molestiae eum numquam consectetur architecto, amet cupiditate repellat! Rerum beatae magnam rem iste. Doloribus laboriosam commodi facilis ratione.</p>
                <h3>Doney Ja</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Review
