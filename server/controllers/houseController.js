import House from "../models/House.js"
import User from "../models/User.js"

export const registerHouse = async(req,res)=>{
    try{
        const {name,address,contact,city}= req.body;
        const owner=req.user._id

        const House = await House.findOne({owner})
        if(house){
            return res.json({success:false,message:"House Already Registered"})
            
        }
        await House.create({name,address,contact,city,owner});
        await User.findByIdAndUpdate(owner,{role:"houseOwner"});
        res.json({success:true,message:"House Registered Successfully"})
    } catch(error){
        res.json({success:false,message:error.message})

    }
}