import mongoose from "mongoose";



const ConnectionDB = async () =>{
 return await mongoose.connect(process.env.DB_URI).then(() => {
    console.log("connected to MongooDB DataBase  (´◡`)");
    
    }).catch((err) => {
    console.log(err);
    
    
   });
} 


export default ConnectionDB;