import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HouseCard = ({ room, index }) => {
  return (
    <Link
      to={'/rooms/' + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className='relative max-w-[280px] w-full rounded-xl overflow-hidden bg-white text-gray-500 shadow-md'
    >
      <img
        src={room.images[0]}
        alt=""
        className='w-full h-52 object-cover'
      />

      {index % 2 === 0 && (
        <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow'>
          Best Seller
        </p>
      )}

      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <p className='font-playfair text-xl font-medium text-gray-800'>
            {room.house.name}
          </p>
          <div className='flex items-center gap-1 text-sm'>
            <img src={assets.starIconFilled} alt="star-icon" className='w-4 h-4' />
            4.5
          </div>
        </div>

        <div className='flex items-center gap-1 text-sm mt-1'>
          <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4' />
          <span className='truncate'>{room.house.address}</span>
        </div>

        <div className='flex items-center justify-between mt-4'>
          <p>
            <span className='text-xl text-gray-800'>
              {room.pricePerNight} TND
            </span>
            /night
          </p>
          <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition cursor-pointer'>
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HouseCard