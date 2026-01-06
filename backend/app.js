import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';


const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello World")
})

const connectDB = async () => {
    try {

        await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log('DB Connected Successfully!')

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })

        
    } catch (error) {
        console.log(error)
    }
}

connectDB();
