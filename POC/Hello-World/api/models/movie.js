var mongoose =  require('mongoose');

module.exports = mongoose.model('Movie',new mongoose.Schema({
    title: String,
    genre: {
        type: 'String',
        enum: ['Action','Drama','SciFi','Comedy','Horror','Documentary']
    },
    year: Number,
    rank: {
        type: Number,
        max: 10,
        min: 1
    }
}));