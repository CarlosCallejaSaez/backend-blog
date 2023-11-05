const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth.js')
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path")

dotenv.config()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to Mongo'))
    .catch((err) => console.log(err)
    )


app.use('/api/auth', authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File uploaded sucessfully")
  })

const PORT = 5001

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))