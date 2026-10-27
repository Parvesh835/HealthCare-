import React from 'react'
import heroBackground from '../assets/hero_background.png'


const Header = () => {
    const navlinks = ["Consultents", "Service", "Contact"]
    const heading = "Health & Wellness Consultations"
    const subHeading = "Lorem ipsum dolor sit amet, consectertuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim venia, quis nostrud exeric"

  return (
      <header
          className='z-20 h-screen  top-0  bg-no-repeat bg-cover '
          style={{ backgroundImage: `url(${heroBackground})` }}>
          
        <div className='flex gap-2 justify-between  px-20 py-20'>
              
          <div>
              <h1 className='font-bold text-3xl text-white '>Health Care</h1>
          </div>
          <ul className='flex gap-5 '>
              {navlinks.map((items, index) =><a href={`#${items}`}> <li className='text-lg text-white cursor-pointer' key={index}>{items}</li></a>)}
          </ul>
          </div>
          
          <div className='pt-40 px-20 w-200 flex flex-col gap-9'>
              <h1 className='text-6xl text-white font-bold'>{heading}</h1>
              <p className='text-xl text-white'>{subHeading}</p>
              <button className='rounded-3xl bg-cyan-500 px-3 py-3 w-60 text-3xl font-bold text-white'>BOOK NOW</button>
          </div>

    </header>
  )
}

export default Header
