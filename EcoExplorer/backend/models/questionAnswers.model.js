import mongoose from "mongoose"

const questionAnswerSchema = mongoose.Schema({
    qaCollection: [
        {
            question: {
                type: String,
                required: true
            },
            answer: {
                type: String,
                required: true
            },
            clarification: {
                type: String
            },
            options: []
        }
    ],
    //catagories 1. common
    qaCollectionType: {
        type: String,
        default: "common"
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

const QuestionAnswers = mongoose.model('QuestionAnswers', questionAnswerSchema)

export default QuestionAnswers; 