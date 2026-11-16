import mongoose, { Schema } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase:true,
        trim: true,
        index: true 
        },
 email: {
        type: String,
        unique: true,
        required: true,
        lowercase:true,
        trim: true,
     
    },
    fullname:{
        type: String,
   required: true,       
   trim:true,
   index: true
    },

    avatar:{
type:String,//cloudinary url 
required:true
    },
    coverImage:{
        type:String,//cloudinary url 
        
    },
    watchHistory:[

       { type:Schema.Types.ObjectId,
        ref:"Video}"
    }
    ],
    password:{
        type:String,
   required:[true, "password is required"]
    },

    refreshToken:{
        type: String
    }
    
},
{
    timestamps:true
}
)

userSchema.pre("save",async function(next){// avoid arrow function in this  use Function (){ } because when i use arrow function it does not know context of usermodel.js it necessary to know the context but in arrow function does not have this keyword so that's why we use normal function 

    if(!this.isModified("password")) return next();

    this.password =bcrypt.hash(this.password,10)
    next()

})
//bcrypt library works both  hash and encrypt both 
//custom method
userSchema.methods.isPasswordCorrect = async function (password) {

return   await bcrypt.compare(password,this.password)
}
userSchema.methods.genrateAccessToken = function(){
  return  jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }


)
}
userSchema.methods.genrateRefreshToken = function(){
return  jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }


)
}


export const User =mongoose.model("User",userSchema)