const asyncHandler =(reqHandler)=>{

   return (req,res,next)=>{
         Promise.resolve(reqHandler(req,res,next)).catch((error)=>next(error))
    }
}




export {asyncHandler}

//  Alternative

// const  asyncHandler =()=>{}
// const asyncHandler =(func)=>()=>{}
// const asyncHandler =(func)= async()=>{}//
// These fn are basicaly used in higher order fn




// const asyncHandler =(fn)=> async (req,res,next)=>{

//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code|| 500).json({
//             sucess:false,
//             message:error.message
//         })
        
//     }
// }