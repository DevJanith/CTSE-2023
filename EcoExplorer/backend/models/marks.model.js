import mongoose from "mongoose"

const marksSchema = mongoose.Schema({
    userDetails: {
        userId: {
            type: String,
            required: true
        },
        userName: {
            type: String,
        },
        userEmail: {
            type: String,
        },
        userContactNumber: {
            type: String,
        }
    },
    marks: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "1"
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const Marks = mongoose.model('Marks', marksSchema)

export default Marks;