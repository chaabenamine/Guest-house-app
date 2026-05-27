import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const NewsLetter = () => {
  return (
    <div class="flex flex-col items-center  max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
    <Title title="Restez Inspiré" subTitle="Rejoignez notre newsletter et soyez le premier à découvrir de nouvelles destinations, des offres exclusives et des inspirations de voyage."/>
    <div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <input type="text" class="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full" placeholder="Entrez votre e-mail"/>
            <button class="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">S'abonner
                <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert group-hover:translate-x-1 transition-all' />
            </button>
    </div>
    <p class="text-gray-500 mt-6 text-xs text-center">En vous abonnant, vous acceptez notre Politique de Confidentialité et consentez à recevoir des mises à jour.</p>
</div>
  )
}

export default NewsLetter