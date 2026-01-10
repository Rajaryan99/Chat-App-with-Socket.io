import asyncHandler from 'express-async-handler'
import User from '../models/user.model.js'
import { generateToken } from '../utils/generateToken.js'



export const registerUser = asyncHandler(async (req, res) => {


    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please Enter full details')
    }


    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exist")
    }


    const user = new User({
        name,
        email,
        password,
        pic
    });

    await user.save();

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error("Eailed to create the user")
    }
        
});

export const authUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error("invalid email or password")
    }
})



