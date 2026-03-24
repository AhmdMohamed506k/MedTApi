import mongoose from "mongoose";



const ConnectionDB = async () =>{
 return await mongoose.connect("mongodb+srv://ahmed:LdJty1NhyNFk3NTW@medtapi.ldtsdnd.mongodb.net/?appName=MedTApi").then(() => {
    console.log("connected to MongooDB DataBase  (´◡`)");
    
    }).catch((err) => {
    console.log(err);
    
    
   });
} 


export default ConnectionDB;