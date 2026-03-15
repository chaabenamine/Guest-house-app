import House from "../models/House.js";
import {v2 as cloudinary} from "cloudinary";
import Room from "../models/Room.js";


export const createRoom = async(req, res)=>{
    try{
        const {roomType,pricePerNight,amenities}=req.body;
        const house = await House.findOne({owner:req.quth.userId})

        if(!house) return res.json({success:false,message:"No House found"});


        const uploadImages = req.files.map(async(file)=>{
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        })

        const images = await Promise.all(uploadImages)

        await Room.create({
            hotel:hotel._id,
            roomType,
            pricePerNight: +pricePerNight,
            amenities:JSON.parse(amenities),
            images,
        })
        res.json({success:true,message:"Room created successfully"})


    }catch(error){
        res.json({success:false,message:error.message})

    }
}



export const getRooms=async (req,res)=>{
    try{
        const rooms= await Room.find({isAvailable:true}).populate({
            path:'house',
            populate:{
                path:'owner',
                select:'image'
            }
        }).sort({createdAt:-1})
        res.json({success:true,rooms});

    }catch(error){
        res.json({success:false,message:error.message});

    }

}



export const getOwnerRooms = async(req, res)=>{

    try{
        const houseData = await House({owner:req.auth.userId})
        const rooms = await Room.find({house:houseData._id.toString()}).populate
        ("house");
        res.json({success:true,rooms});

    }catch(error){
        res.json({success:false,message:error.message});

    }

}


export const toggleRoomAvailability = async(req, res)=>{
    try{
        const{roomId}=req.body;
        const roomData = await Room.findById(roomId);
        roomData.isAvailable=!roomData.isAvailable;
        await roomData.save();
         res.json({success:true,message:"Room availability Updated"});
       


    }catch(error){
           res.json({success:false,message:error.message});
    }
    
}