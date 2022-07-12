//imports
const express = require("express");
const mongoose = require("mongoose");
const apiroutes = require("./Routes/ApiRoutes");

//app config
const app = express();
PORT = process.env.PORT || 8000;

//database config
mongodbURI =
  "mongodb+srv://apiuser:a12345678@avincluster.nbeg5.mongodb.net/urlshortener?retryWrites=true&w=majority";
const dbconnect = async (uri) => {
  try {
    const connect = await mongoose.connect(uri);
    console.log(`connected to database ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
dbconnect(mongodbURI);

//middlewares

//routes
app.use("/api", apiroutes);

//listener
app.listen(PORT, () => {
  console.log(`server online on port ${PORT}`);
});
