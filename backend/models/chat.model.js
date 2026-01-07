import mongoose, { Schema } from 'mongoose'


const chatSchema = new Schema({
    chatName: {
        type: String,
        trim: true,
    },

    isGroupChat: {
        type: Boolean,
        default: true,
    },

    users: [{
        type: Schema.Types.ObjectId,
        ref: "user",
    }],
    latestMessage: {
        type: Schema.Types.ObjectId,
        ref: "Message"
    },

    groupAdmin: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }

},
    {
        timestamps: true,
    }
    

)

const Chat = mongoose.model("Chat", chatSchema)
module.exports = Chat;

