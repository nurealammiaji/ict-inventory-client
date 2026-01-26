import React from 'react'
import { PiHandArrowDown, PiHandDeposit, PiPackage, PiSealCheck, PiSealQuestion, PiSealWarning } from 'react-icons/pi'

const Home = () => {
  return (
    <div>
      <div>
        <div className='divider w-1/2 mx-auto'>
          <h2 className='text-xl font-semibold'>Home</h2>
        </div>
        <div className="shadow mt-14 grid grid-cols-3 gap-10 w-[80%] mx-auto">
          <div className="stat">
            <div className="stat-figure text-primary">
              <PiPackage className='text-6xl' />
            </div>
            <div className="stat-title font-bold text-sm">Items</div>
            <div className="stat-value">700</div>
            <div className="stat-desc">Total</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <PiHandArrowDown className='text-6xl' />
            </div>
            <div className="stat-title font-bold text-sm">Loans</div>
            <div className="stat-value">400</div>
            <div className="stat-desc">Total</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-accent">
              <PiHandDeposit className='text-6xl' />
            </div>
            <div className="stat-title font-bold text-sm">Deposits</div>
            <div className="stat-value">300</div>
            <div className="stat-desc">Total</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-success">
              <PiSealCheck className='text-6xl' />
            </div>
            <div className="stat-title font-bold text-sm">Good</div>
            <div className="stat-value">400</div>
            <div className="stat-desc">Total</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-warning">
              <PiSealQuestion className='text-6xl' />
            </div>
            <div className="stat-title font-bold text-sm">Serviceable</div>
            <div className="stat-value">200</div>
            <div className="stat-desc">Total</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-error">
              <PiSealWarning className='text-6xl' />
            </div>
            <div className="stat-title font-bold text-sm">Unserviceable</div>
            <div className="stat-value">100</div>
            <div className="stat-desc">Total</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
