import React from 'react'
import { PiCirclesThreePlus, PiMapPinArea, PiMedal, PiPackage, PiTruck, PiUsersDuotone, PiUsersFill, PiUsersThree } from 'react-icons/pi'
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
      <div>
        <div className='divider w-1/2 mx-auto'>
          <h2 className='text-xl font-semibold'>Settings</h2>
        </div>
      </div>
      <br />
      <div className='grid grid-cols-3 gap-10 mt-14 w-[80%] mx-auto'>
        <Link to={"/settings/categories"} className='border p-5 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiCirclesThreePlus className='text-5xl' /> <span className='text-2xl'>Categories</span></p>
        </Link>
        <Link to={"/settings/brands"} className='border p-5 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiMedal className='text-5xl' /><span className='text-2xl'>Brands</span></p>
        </Link>
        <Link to={"/settings/items"} className='border p-5 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiPackage className='text-5xl' /><span className='text-2xl'>Items</span></p>
        </Link>
        <Link to={"/settings/suppliers"} className='border p-5 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiTruck className='text-5xl' /><span className='text-2xl'>Suppliers</span></p>
        </Link>
        <Link to={"/settings/locations"} className='border p-5 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiMapPinArea className='text-5xl' /><span className='text-2xl'>Locations</span></p>
        </Link>
        <Link to={"/settings/consumers"} className='border p-5 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiUsersThree className='text-5xl' /><span className='text-2xl'>Consumers</span></p>
        </Link>
        <Link to={"/settings/users"} className='border p-5 rounded-lg hover:bg-info hover:text-white'>
          <p className='flex items-center justify-center gap-5'><PiUsersDuotone className='text-5xl' /><span className='text-2xl'>Users</span></p>
        </Link>
      </div>
    </div >
  )
}

export default Settings
