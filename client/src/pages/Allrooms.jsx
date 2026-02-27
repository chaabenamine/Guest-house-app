import React from 'react'
import { assets, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

const Allrooms = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24'> 
    <div>
     <div className='flex flex-col items-start text-left'>
        <h1 className='font-playfair text-4xl md:text-[40px]'>House Guset Rooms</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
        
     </div>

       {roomsDummyData.map((room)=(
        <div>
            <img onClick={()=> {navigate(`/rooms/${room.id}`);scrollTo(0,0)}}
            src={room.images[0]} alt="house-img"  title='View Room Details'className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
            <div className='md:w-1/2 flex flex-col gap-2'>
                <p className='text-gray-500'>{room.house.city}</p>
                <p onClick={()=> {navigate(`/rooms/${room.id}`);scrollTo(0,0)}} className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.house.name}</p>
                <div className='flex items-center'>
                    <StarRating/>
                    <p className='ml-2'>200+ reviews</p>
                </div>
                <div>
                    <img src={assets.locationIcon} alt="location-icon" />
                </div>
            </div>

        </div>
       ))}

    </div>
    {/*Filters*/}
    <div>

    </div>
    </div>
  )
}

export default Allrooms