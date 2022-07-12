//imports
const express = require("express");

//app config
const app = express();
PORT = process.env.PORT || 8000;

//middlewares

//routes

//listener
app.listen(PORT, () => {
  console.log(`server online on port ${PORT}`);
});
