import React from 'react'

function Banner() {
  return (
    <div className='w-full h-[540px] bg-red-300 flex items-center justify-center relation'>
        <div className='absolute z-0'>
          <svg width="1512" height="540" viewBox="0 0 1512 540" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="1512" height="540" fill="url(#pattern0)"/>
          <rect opacity="0.7" width="1512" height="540" fill="url(#paint0_linear_25_72)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_25_72" transform="matrix(0.001 0 0 0.0027541 0 -2.00735)"/>
          </pattern>
          <linearGradient id="paint0_linear_25_72" x1="1207.5" y1="281.311" x2="390" y2="281.311" gradientUnits="userSpaceOnUse">
          <stop stop-color="#55AEA9"/>
          <stop offset="1" stop-color="#1B568C"/>
          </linearGradient>
          </defs>
          </svg>
        </div>
      <div className='flex flex-col gap-6 items-center z-10'>
        <p className='text-[32px] font-bold text-white'>Pilih Game Favorite Kalian</p>
        <p className='w-[366px] text-center text-[16px] text-white leading-[151.023%]'>
          Shortbread cookie tootsie roll sugar plum cheesecake pudding croissant apple pie.
          <br/>Lollipop macaroon lollipop croissant chocolate cake croissant fruitcake brownie jelly-o.
        </p>
        <div>
          <button type='button' className='rounded-md bg-[#0884F5] py-[12px] px-[20px]'>
            <p className='text-white text-[16px] leading-[151.023%]'>Sign Up For Free Account</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner