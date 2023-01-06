import React from 'react'
import './shoebrand.css'
import shoe from './assets/shoe.jpg'
import shoe1 from './assets/shoe1.jpg'
import shoe2 from './assets/shoe2.jpg'
import shoe3 from './assets/shoe3.jpg'

const test = () => {
  return (
    <div >
        
        <header className='shoe__navbar'>
          <div className="shoe__navbar--logo">
            <a href='#home'>Shoe<span>Brand</span></a>
          </div>
          <nav className="shoe__navbar--links">
            <ul>
              <li><a href="#home" >Home</a></li>
              <li><a href="#about" >About</a></li>
              <li><a href="#contact" >Contact</a></li>
            </ul>
          </nav>

          <svg className="shoe__navbar--toggle" width="2.2rem" height="2.2rem" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z" fill="white"/>
          </svg>

        </header>
          
        <div className="shoe__heroarea">
        <h1 className="shoe__hero--title">Regain your Confidence</h1>
        <p className="shoe__hero--content">The shoe built with purpose and to take your game to the next level</p>
        <svg width="24" height="132" viewBox="0 0 16 132" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z" fill="black"/>
        </svg>

        </div>

          <img src={shoe} alt="" className="shoe__image" />  
        

        <section>
          <div className="shoe__section">

            <div className="shoe__features--container">
              <div className="shoe__features--description">
                <h2 className="shoe__features--title">LightWeight</h2>
                <p className="shoe__features--content">This is going to be the best shoe you ever wore. Embrace the greatness </p>
              </div>
              <img src={shoe1} alt="Nike Shoe" className="shoe__features--image" />

              <div className="shoe__features--container">
              <div className="shoe__features--description shoe__features--left">
                <h2 className="shoe__features--title ">LightWeight</h2>
                <p className="shoe__features--content">This is going to be the best shoe you ever wore. Embrace the greatness </p>
              </div>
              <img src={shoe2} alt="Nike Shoe" className="shoe__features--image" />
            </div>

            <div className="shoe__features--container">
              <div className="shoe__features--description">
                <h2 className="shoe__features--title ">Durability</h2>
                <p className="shoe__features--content">This is going to be the best shoe you ever wore. Embrace the greatness </p>
              </div>
              <img src={shoe3} alt="Nike Shoe" className="shoe__features--image" />
            </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default test