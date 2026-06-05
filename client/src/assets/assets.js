import logo from './logo.png'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.jpg'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.jpg'
import bath2 from './bath2.png'
import lib2 from './lib2.png'
import di2 from './di2.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.jpg";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.jpg";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.jpg";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import airIcon from "./airIcon.svg";
import seaIcon from "./seaIcon.svg";
import desk from "./desk.png";
import kitchen from "./kitchen.png"
import Bedrooms2 from "./2 Bedrooms.svg"
import Balcony from "./Balcony.svg"


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    airIcon,
    seaIcon,
    desk,
    kitchen,
    Bedrooms2,
    Balcony,
}

export const cities = [
    "Kef",
    "Beja",
    "Tozeur",
    "Kébili",
    "Bizerte ",
    "Sousse",
    "Kairouan",
    "Monastir "
    
];

export const exclusiveOffers = [
    { 
        _id: 1, 
        title: "Séjour Confortable au Kef", 
        description: "Détendez-vous dans une chambre confortable à la Maison Caméléon Kef avec un petit-déjeuner local offert", 
        priceOff: 20, 
        expiryDate: "31 Août", 
        image: exclusiveOfferCardImg1 
    },
    { 
        _id: 2, 
        title: "Expérience Romantique en Terrasse", 
        description: "Forfait spécial couples avec vue sur le coucher de soleil depuis la terrasse et boisson de bienvenue à la maison d'hôtes", 
        priceOff: 15, 
        expiryDate: "20 Sep", 
        image: exclusiveOfferCardImg2 
    },
    { 
        _id: 3, 
        title: "Réservation Anticipée Maison Caméléon", 
        description: "Réservez 30 jours à l'avance et profitez d'une réduction sur votre séjour dans nos chambres d'hôtes confortables", 
        priceOff: 25, 
        expiryDate: "25 Sep", 
        image: exclusiveOfferCardImg3 
    }
];
    


// Testimonials Dummy Data
export const testimonials = [
    {
        id: 1,
        name: "Cristiano Ronaldo",
        address: "Portugal, Lisbonne",
        image: "./ronaldo.webp",
        rating: 5,
        review: "Une expérience exceptionnelle ! La réservation a été simple et rapide, et la maison d’hôtes a dépassé toutes mes attentes en matière de confort et d’accueil."
    },
    {
        id: 2,
        name: "lionel messi",
        address: "Argentine, Buenos Aires",
        image: "./messi.webp",
        rating: 4,
        review: "Un séjour très agréable dans un cadre chaleureux et authentique. Le personnel était attentionné et toujours disponible pour répondre à nos besoins."
    },
    {
        id: 3,
        name: "ichrak brinsi",
        address: "Tunisie, Tunisie",
        image: "./ichrak.jpg",
        rating: 5,
        review: "J’ai adoré mon séjour ! Les chambres étaient impeccables, l’ambiance conviviale et les services proposés ont rendu l’expérience vraiment mémorable."
    }
];

// Facility Icon
export const facilityIcons = {
    "WiFi Gratuit": assets.freeWifiIcon,
    "Petit-Déjeuner Inclus": assets.freeBreakfastIcon,
    "Service d'Étage": assets.roomServiceIcon,
    "Vue sur la Montagne": assets.mountainIcon,
    "Accès Piscine": assets.poolIcon,
    "Climatisation": assets.airIcon,
    "Vue sur la Mer":assets.seaIcon,
    "Bureau":assets.desk,
    "Cuisine":assets.kitchen,
    "2 Chambres":assets.Bedrooms2,
    "Balcon":assets.Balcony,
};

// For Room Details Page
export const roomCommonData = [

    { icon: assets.homeIcon, title: "Séjour propre et sécurisé", description: "Un espace bien entretenu et hygiénique rien que pour vous." },

    { icon: assets.badgeIcon, title: "Nettoyage renforcé", description: "Cet hôte suit les normes de nettoyage strictes de Staybnb." },

    { icon: assets.locationFilledIcon, title: "Excellent emplacement", description: "90% des voyageurs ont attribué 5 étoiles à l’emplacement." },

    { icon: assets.heartIcon, title: "Arrivée facile", description: "100% des voyageurs ont attribué 5 étoiles à l’enregistrement." },

];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Maison Caméléon",
    "email": "user.maisoncaméléon@gmail.com",
    "image": "/logo.png",
    "role": "houseOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "Marsa"
    ]
}


export const houseDummyData = [
  {
    _id: "67f76393197ac559e4089b72",
    name: "Évasion Montagnarde du Nord-Ouest",
    address: "Rue Habib Bourguiba, Le Kef, Tunisia",
    contact: "+216 55 123 456",
    owner: userDummyData,
    city: "Kef",
    createdAt: "2025-04-10T06:22:11.663Z",
    updatedAt: "2025-04-10T06:22:11.663Z",
    __v: 0
  },
  {
    _id: "67f76393197ac559e4089b73",
    name: "Expérience du Désert Saharien",
    address: "Avenue Hédi Chaker, Tozeur, Tunisia",
    contact: "+216 55 123 456",
    owner: userDummyData,
    city: "Tozeur",
    createdAt: "2025-04-10T06:22:11.663Z",
    updatedAt: "2025-04-10T06:22:11.663Z",
    __v: 0
  },
  {
    _id: "67f76393197ac559e4089b74",
    name: "Centre Spirituel et Patrimonial",
    address: "Rue Ibn El Jazzar, Kairouan, Tunisia",
    contact: "+216 55 654 321",
    owner: userDummyData,
    city: "Kairouan",
    createdAt: "2025-04-10T06:25:11.663Z",
    updatedAt: "2025-04-10T06:25:11.663Z",
    __v: 0
  },
  {
    _id: "67f76393197ac559e4089b75",
    name: "Mode de Vie Côtier Méditerranéen",
    address: "Boulevard du 14 Janvier, Sousse, Tunisia",
    contact: "+216 55 987 654",
    owner: userDummyData,
    city: "Sousse",
    createdAt: "2025-04-10T06:28:11.663Z",
    updatedAt: "2025-04-10T06:28:11.663Z",
    __v: 0
  }
]

// Corrected Rooms Data
export const roomsDummyData = [
  {
    _id: "r1",
    house: houseDummyData[0], // Nord-Ouest Montagnard
    roomType: "Chambre Double Deluxe",
    pricePerNight: 420,
    amenities: ["WiFi Gratuit", "Vue sur la Montagne", "Climatisation", "Petit-Déjeuner Inclus"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true
  },
  {
    _id: "r2",
    house: houseDummyData[1], // Sud Saharien
    roomType: "Chambre Double Standard",
    pricePerNight: 300,
    amenities: ["WiFi Gratuit",  "Service d'Étage","Climatisation", "Petit-Déjeuner Inclus"],
    images: [roomImg2, bath2, lib2, di2],
    isAvailable: true
  },
  {
    _id: "r3",
    house: houseDummyData[2], // Oasis Retreat
    roomType: "Chambre Simple",
    pricePerNight: 220,
    amenities: ["WiFi Gratuit", "Bureau", "Climatisation"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: false
  },
  {
    _id: "r4",
    house: houseDummyData[3], // Sahara Sunset Villa
    roomType: "Suite Familiale",
    pricePerNight: 650,
    amenities: ["WiFi Gratuit", "Vue sur la Mer", "2 Chambres", "Cuisine", "Balcon"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true
  }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "house": houseDummyData[1],
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "house": houseDummyData[1],
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Paiement sur place",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "house": houseDummyData[1],
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Paiement sur place",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/