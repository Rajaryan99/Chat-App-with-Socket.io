import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';
import { chats } from './data/data.js'
import userRoutes from './routes/userRoutes.js'


const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/getdata', (req, res) => {
    res.send(chats)
})

app.get('/getdata/:id', (req, res) => {
    const chat = chats.find((chat) => chat._id === req.params.id);
    res.send(chat)
})


app.use('/user', userRoutes)

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
