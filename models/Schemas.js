const { Schema, model } = require('mongoose')

const responseSchema = new Schema({
    url: {
        type: String,
    },
    status: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
}, 
{
    timestamps: true
})

const urlSchema = new Schema({
    url: {
        type: String,
        required: true
    }
})

module.exports = {
    Responses: model('Response', responseSchema),
    Urls: model('Url', urlSchema)
}