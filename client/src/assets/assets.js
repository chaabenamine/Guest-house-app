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
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.jpg'
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
        title: "Cozy Kef Stay", 
        description: "Relax in a comfortable room at Maison Caméléon Kef with a complimentary local breakfast", 
        priceOff: 20, 
        expiryDate: "Aug 31", 
        image: exclusiveOfferCardImg1 
    },
    { 
        _id: 2, 
        title: "Romantic Terrace Experience", 
        description: "Special couples package with terrace sunset views and a welcome drink at the guesthouse", 
        priceOff: 15, 
        expiryDate: "Sep 20", 
        image: exclusiveOfferCardImg2 
    },
    { 
        _id: 3, 
        title: "Early Bird Maison Caméléon", 
        description: "Book 30 days in advance and enjoy a discount on your stay in our cozy guesthouse rooms", 
        priceOff: 25, 
        expiryDate: "Sep 25", 
        image: exclusiveOfferCardImg3 
    }
];
    


// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "NYC, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the houses were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Breakfast Included": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
    "Air Conditioning": assets.airIcon,
    "Sea View":assets.seaIcon,
    "desk":assets.desk,
    "kitchen":assets.kitchen,
    "2 Bedrooms":assets.Bedrooms2,
    "Balcony":assets.Balcony,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
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
    name: "North-West Mountain Escape",
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
    name: "Saharan Desert Experience",
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
    name: "Spiritual & Heritage Center",
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
    name: "Mediterranean Coastal Lifestyle",
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
    roomType: "Deluxe Double Room",
    pricePerNight: 420,
    amenities: ["Free WiFi", "Mountain View", "Air Conditioning", "Breakfast Included"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true
  },
  {
    _id: "r2",
    house: houseDummyData[1], // Sud Saharien
    roomType: "Standard Double Room",
    pricePerNight: 300,
    amenities: ["Free WiFi",  "Room Service","Air Conditioning", "Breakfast Included"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true
  },
  {
    _id: "r3",
    house: houseDummyData[2], // Oasis Retreat
    roomType: "Single Room",
    pricePerNight: 220,
    amenities: ["Free WiFi", "desk", "Air Conditioning"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: false
  },
  {
    _id: "r4",
    house: houseDummyData[3], // Sahara Sunset Villa
    roomType: "Family Suite",
    pricePerNight: 650,
    amenities: ["Free WiFi", "Sea View", "2 Bedrooms", "kitchen", "Balcony"],
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
        "paymentMethod": "Pay At house",
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
        "paymentMethod": "Pay At house",
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