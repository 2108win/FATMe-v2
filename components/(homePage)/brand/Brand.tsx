import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <div className='w-full bg-base-200'>
      <div className="container">
        <div className="carousel space-x-5 rounded-box">
          <div className="carousel-item">
            <Image src='/images/logo.png' alt='logo' width={160} height={160} />
          </div>
          <div className="carousel-item">
            <Image src='/images/logo.png' alt='logo' width={160} height={160} />
          </div>
          <div className="carousel-item">
            <Image src='/images/logo.png' alt='logo' width={160} height={160} />
          </div>
          <div className="carousel-item">
            <Image src='/images/logo.png' alt='logo' width={160} height={160} />
          </div>
          <div className="carousel-item">
            <Image src='/images/logo.png' alt='logo' width={160} height={160} />
          </div>
          <div className="carousel-item">
            <Image src='/images/logo.png' alt='logo' width={160} height={160} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand