import React from 'react'
import { PiGear, PiHandArrowDown, PiLaptop } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 mt-20'>
        <Link to={"/loan-register"} className='border p-10 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiHandArrowDown className='text-5xl' /> <span className='text-2xl'>Loan Register</span></p>
        </Link>
        <Link to={"/laptop-register"} className='border p-10 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiLaptop className='text-5xl' /><span className='text-2xl'>Laptop Register</span></p>
        </Link>
        <Link to={"/settings"} className='border p-10 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiGear className='text-5xl' /><span className='text-2xl'>Settings</span></p>
        </Link>
      </div>
    </div>
  )
}

export default Home
