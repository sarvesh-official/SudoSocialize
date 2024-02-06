import User from "../models/UserModel.js";

export const getUsersForSidebar = async(req,res) =>{
    try{

        const loggedInUserId = req.user._id

        //^ To message to yourself you can use User.find()
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password") //! filtering out the current user

        res.status(200).json(filteredUsers)
    }catch(error){
        console.error("Error in getUsersForSidebar: ",error.message)
        res.status(500).json({error:"Internal Server Error"});
    }
}