const mongoose = require("mongoose")
const dotEnv = require("dotenv");
dotEnv.config();
const mongoDB = async () => {
    try {
      await mongoose.connect(process.env.mongo_uri);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("fooditems");
      let data=await fetched_data.find({}).toArray() 
      
    } catch (error) {
      console.log('err: ', error);
    }
  };
module.exports = mongoDB;