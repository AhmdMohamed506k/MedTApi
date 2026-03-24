



export const asyncHandler = (fn)=>{

    return(req,res,next)=>{

        fn(req,res,next).catch((err)=>{
             next(err)
        })

    }



}

export const GlobalErrorHandler = (err,req,res,next)=>{
   
    

  return res.status(err.statusCode || 500).json({ status:err.status || "error" , ErrorMsg:err.message})
}