import React from 'react'
import { PiHandArrowDown, PiLaptop } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-10 mt-20'>
        <Link to={"/loan-register"} className='border p-10 rounded-lg btn'>
          <p className='flex items-center justify-center gap-5'><PiHandArrowDown className='text-3xl' /> <span className='text-xl'>Loan Register</span></p>
        </Link>
        <Link to={"/laptop-register"} className='border p-10 rounded-lg btn'>
          <p className='flex items-center justify-center gap-5'><PiLaptop className='text-3xl' /><span className='text-xl'>Laptop Register</span></p>
        </Link>
      </div>
    </div>
  )
}

export default Home
