import mongoose from "mongoose";

await mongoose.connect(
    "mongodb+srv://rajendra143:WS3Ch0NGqYXROLA3@cluster0.xcblipr.mongodb.net/?retryWrites=true&w=majority"
)
.then(
    (resolve) =>{
        console.log("Connection done");
    }
)
.catch(
    (reject) =>{
    console.log("Unable to connect");
    }
)

console.log("Hello");