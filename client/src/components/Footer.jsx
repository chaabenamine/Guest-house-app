import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
   <div className=' bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-30 invert opacity-80' />
                    <p className='text-sm'>
                        Découvrez les endroits les plus extraordinaires où séjourner au monde.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        <img src={assets.instagramIcon} alt="instagram-icon" className='w-6' />
                        <img src={assets.facebookIcon} alt="facebook-icon" className='w-6'/>
                        <img src={assets.twitterIcon} alt="twitter-icon" className='w-6'/>
                        <img src={assets.linkendinIcon} alt="linkedln-icon"className='w-6' />
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>ENTREPRISE</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Carrières</a></li>
                        <li><a href="#">Presse</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partenaires</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>ASSISTANCE</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Centre d'aide</a></li>
                        <li><a href="#">Informations de sécurité</a></li>
                        <li><a href="#">Options d'annulation</a></li>
                        <li><a href="#">Nous contacter</a></li>
                        <li><a href="#">Accessibilité</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-gray-800'>RESTEZ INFORMÉ</p>
                    <p className='mt-3 text-sm'>
                        Abonnez-vous à notre newsletter pour de l'inspiration et des offres spéciales.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Votre e-mail' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                            <img src={assets.arrowIcon} alt="arrow.icon" className='w-3.5 invert' />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>©{new Date().getFullYear()} Brand. Tous droits réservés.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Confidentialité</a></li>
                    <li><a href="#">Conditions</a></li>
                    <li><a href="#">Plan du site</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer