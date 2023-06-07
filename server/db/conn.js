const mongoose = require("mongoose");

const DB = "mongodb+srv://usha:usha12345@cluster0.wtdppkt.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));