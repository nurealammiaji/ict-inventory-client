import React from 'react'
import { PiCertificate, PiCirclesThreePlus, PiCodepenLogo } from 'react-icons/pi'
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 mt-20'>
        <Link to={"/settings/categories"} className='border p-8 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiCirclesThreePlus className='text-5xl' /> <span className='text-2xl'>Categories</span></p>
        </Link>
        <Link to={"/settings/brands"} className='border p-8 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiCertificate className='text-5xl' /><span className='text-2xl'>Brands</span></p>
        </Link>
        <Link to={"/settings/Items"} className='border p-8 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiCodepenLogo className='text-5xl' /><span className='text-2xl'>Items</span></p>
        </Link>
      </div>
    </div>
  )
}

export default Settings
