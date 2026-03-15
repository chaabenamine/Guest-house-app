import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    house:{type:String,required: true},
    roomType:{type:String,ref:"House",required: true},
    pricePerNight:{type:Number,required: true},
    amenities:{type:Array,required: true},
    images:[{type:String}],
    isAvailable:{type:Boolean,default: true},
    
},{timestamps:true});


const Room = mongoose.model("Room",roomSchema);

export default Room;