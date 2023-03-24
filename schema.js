const mongoose = require('mongoose');


const modelSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    startTime: {
        type: Time,
        require: true
    },
    endTime: {
        type: Time,
        require: true
    }
})

const collection = mongoose.model("collection", modelSchema);
module. exports = collection;
