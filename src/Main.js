import React from 'react'
import './Main.css';
import bgimage from './Image/img.png';

const main = () => {
  return (
    <div className='nav2'>
        <div className='lable'>
        <div className="logo">
            <a href="/">ShopKart</a>
        </div>
        <ul className="nav-list">
            <li><a href="#">WISHLIST (0)</a></li>
            <li><a href="#">BAG (0)</a></li>
        </ul>
    </div>
        <hr className='line'></hr>
        <ul className="nav-list2">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <ul className='product'>
            <li><a href="#">OUR PRODUCTS</a></li>
                <li><a href="#">PRODUCT 1</a></li>
                <li><a href="#">PRODUCT 2</a></li>
                <li><a href="#">PRODUCT 3</a></li>
                <li><a href="#">PRODUCT 4</a></li>
            </ul>
            <li><a href="/contact">CONTACT US</a></li>
            <div className='fresh'><span>Fresh</span></div>
            <div className='year'><span>2022</span></div>
            <div className='look fresh'><span>Look</span></div>
          <img className='bgimg' src={bgimage} alt="Logo" />
          <div className='orange'></div>
        </ul>
    </div>
    
  );
}

export default main