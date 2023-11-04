const express=require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute=require('./routes/auth.js')

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Connected to Mongo'))
.catch((err)=>console.log(err)
)


app.use('/api/auth',authRoute)

const PORT=5000

app.listen(PORT,()=>console.log(`Servidor corriendo en el puerto ${PORT}`))