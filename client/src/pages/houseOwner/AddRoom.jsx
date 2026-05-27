import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
    const [images, setImages] = useState({
        1:null,
        2:null,
        3:null,
        4:null
    })
    const [inputs, setInputs] = useState({
        roomType:'',
        pricePerNight:0,
        amenities:{
            'Wifi Gratuit': false,
            'Petit-déjeuner Gratuit': false,
            'Service en Chambre': false,
            'Vue sur la Montagne': false,
            'Accès Piscine': false

        }
    })
  return (
    <form >
        <Title align='left' font='outfit' title='Ajouter une Chambre' subTitle='Remplissez soigneusement les détails de la chambre, les prix et les équipements avec précision afin d&apos;améliorer l&apos;expérience de réservation de l&apos;utilisateur.'/>
        {/*upload area for images */}
        <p className='text-gray-800 mt-10'>Images</p>
        <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
            {Object.keys(images).map((key)=>(
                <label htmlFor={`roomImages${key}`} key={key}>
                    <img className='max-h-13 cursor-pointer opacity-80'
                     src={images[key] ? URL.createObjectURL(images[key]):assets.uploadArea} alt="" />
                     <input type="file" accept='image/*'id={`roomImages${key}`} hidden
                     onChange={e=> setImages({...images,[key]:e.target.files[0]})} />
                </label>
            ))}

        </div>

        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
            <div className='flex-1 max-w-48'>
            <p className='text-gray-800 mt-4'>Type de Chambre</p>
            <select value={inputs.roomType} onChange={e=>setInputs({...inputs,
                roomType: e.target.value})}
             className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
                <option value="">Sélectionnez le type de chambre</option>
                <option value="Single Bed">Lit Simple</option>
                <option value="Double Bed">Lit Double</option>
                <option value="Luxury Bed">Lit de Luxe</option>
                <option value="Family Suite">Suite Familiale</option>
            </select>
            </div>
            <div>
                <p className='mt-4 text-gray-800'>
                    Prix <span className='text-xs'>/nuit</span>
                </p>
                <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24'
                 value={inputs.pricePerNight} onChange={e=>setInputs({...inputs,pricePerNight:e.target.value})} />
            </div>

        </div>

        <p className='text-gray-800 mt-4'>Équipements</p>
        <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
            {Object.keys(inputs.amenities).map((amenity,index)=>(
                <div key={index}>
                    <input type="checkbox" id={`amenities${index+1}`} checked=
                    {inputs.amenities[amenity]} onChange={()=>setInputs({...inputs,
                     amenities:{...inputs.amenities,[amenity]:!inputs.amenities[amenity]}})} />
                     <label htmlFor={`amenities${index+1}`}>{amenity}</label>

                </div>
            ))}

        </div>

       <button className="bg-blue-600 text-white px-8 py-2 rounded mt-8 cursor-pointer hover:bg-blue-700 transition">
  Ajouter la Chambre
</button>


    </form>
  )
}

export default AddRoom