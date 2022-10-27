import React from 'react'
import productimg1 from '../image/product-1.png'
import productimg2 from '../image/product-2.png'
import productimg3 from '../image/product-3.png'
import productimg4 from '../image/product-4.png'
import productimg5 from '../image/product-5.png'
import productimg6 from '../image/product-6.png'
import productimg7 from '../image/product-7.png'
import productimg8 from '../image/product-8.png'
import style3 from './Product.module.css'


const Product = () => {
  return (
    <div id='products'>
                <h1>Our <span> Products</span></h1>
      <div className={style3.productContainer}>
        <div>
        <div>
            <img src={productimg1} alt="" />
        </div>
        <div>
            <h3>fresh orange</h3>
            <div>
            <p>$4.99/ -- 10.99/-</p>
            </div>
            <div>
                <button>Add To Cart</button>
            </div>
            </div>
        </div>
        <div>
        <div>
            <img src={productimg2} alt="" />
        </div>
        <div>
            <h3> fresh onion  </h3>
            <div>
            <p>$4.99/ -- 10.99/-</p>
            </div>
            <div>
            <button>Add To Cart</button>
            </div>
        </div>
        </div>
        <div>
        <div>
            <img src={productimg3} alt="" />
        </div>
        <div>
            <h3> fresh meat </h3>
            <div>
            <p>$4.99/ -- 10.99/-</p>
            </div>
            <div>
            <button>Add To Cart</button>
            </div>
        </div>
        </div>
        <div>
        <div>
            <img src={productimg4} alt="" />
        </div>
        <div>
            <h3> fresh cabage</h3>
            <div>
            <p>$4.99/ -- 10.99/-</p>
            </div>
            <div>
            <button>Add To Cart</button>
            </div>
        </div>
        </div>
        <div>
        <div>
            <img src={productimg5} alt="" />
        </div>
        <div>
            <h3> fresh potato </h3>
            <div>
            <p>$4.99/ -- 10.99/-</p>
            </div>
            <div>
            <button>Add To Cart</button>
            </div>
        </div>
        </div>
        <div>
        <div>
            <img src={productimg6} alt="" />
        </div>
        <div>
            <h3> fresh avocado </h3>
            <div>
            <p>$4.99/ -- 10.99/-</p>
            </div>
            <div>
            <button>Add To Cart</button>
            </div>
        </div>
        </div>
        <div>
        <div>
            <img src={productimg7}alt="" />
        </div>
        <div>
            <h3>fresh carrot </h3>
            <div>
            <p>$4.99/ -- 10.99/-</p>
            </div>
            <div>
            <button>Add To Cart</button>
            </div>
        </div>
        </div>
        <div>
        <div>
            <img src={productimg8} alt="" />
        </div>
        <div>
            <h3>green lemon</h3>
            <div>
            <p>$4.99/ -- 10.99/-</p>
            </div>
            <div>
            <button>Add To Cart</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
