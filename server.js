const express = require("express");
const mongoose = require("mongoose");
const route = require("./routers/formBuilder")
const app = express();
const cors = require("cors");
app.use(cors());
require('dotenv').config()
app.use(express.json());
app.get('/',(req,res)=>{
  res.send(`<h1>Hey Brother!!!</h1>`);
})
mongoose
  .connect('mongodb+srv://test123:test123@formbuilder.90zy3kj.mongodb.net/?retryWrites=true&w=majority')
  .then((result) =>
    app.listen(process.env.PORT || 5000,  () => {
      console.log("Connected DB 5000");
    })
  )
  .catch((err) => console.log(err));

app.use(route)
