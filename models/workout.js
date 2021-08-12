const mongoose = require('mongoose');
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {type: Date, default: () => new Date()},
    exercises: [{
        
        type: {type: String, required: 'Please enter an exercise type.'},

        name: {type: String, required: 'Please enter an exercise name.'},

        duration: {type: Number, required: 'Please enter a duration.'},

        weight: Number,

        reps: Number,

        sets: Number,

        distance: Number

    }]
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;

// Reseed