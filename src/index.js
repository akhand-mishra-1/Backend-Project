// require(`dotenv`).config({path: './env'});  //method 1
import dotenv from 'dotenv'
import connectDB  from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

let port = process.env.PORT||8000;

// when async task is done it return promise as return based 
// remember this line

connectDB() 
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at port : ${port}`);
    })
    .on("error",()=>{
            console.log("Mongodb connection error");
            
        })
})
.catch((error)=>{
    console.log("Mongodb connection failed !!!",error);
}
)






// .first approach to connect database
// const function conectdb(){


// }
/*
(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("My application would not talk to database");
        throw error;
       })
       app.listen(process.env.PORT,()=>{
        console.log(` Mongodb connected ${process.env.PORT}`);
        
       })
    } catch (error) {
        console.error("Error :",error)
        throw err
    }

})()
    */