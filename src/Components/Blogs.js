import React from 'react'
import blogimg1 from '../image/blog-1.jpg'
import blogimg2 from '../image/blog-2.jpg'
import blogimg3 from '../image/blog-3.jpg'
import style6 from './Blogs.module.css'


const Blogs = () => {
  return (
    <div id='blogs'>
        <h1>Our <span> Blogs</span></h1>

      <div className={style6.blogsContainer}>
        <div className={style6.blogbox1}>
            <div>
                <img src={blogimg1} alt="" />
            </div>
            <div>
                <span>By User</span>
                <span>1st May, 2021</span>
            </div>
            <div>
                <h3>Fresh And Organic Vegetables And Fruits</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.</p>
                <div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div className={style6.blogbox2}>
            <div>
                <img src={blogimg2} alt="" />
            </div>
            <div>
                <span>By User</span>
                <span>1st May, 2021</span>
            </div>
            <div>
                <h3>Fresh And Organic Vegetables And Fruits</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.</p>
                <div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div className={style6.blogbox3}>
            <div>
                <img src={blogimg3} alt="" />
            </div>
            <div>
                <span>By User</span>
                <span>1st May, 2021</span>
            </div>
            <div>
                <h3>Fresh And Organic Vegetables And Fruits</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.</p>
                <div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
