const mongoose = require('mongoose');
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {type: Date, default: () => new Date()},
    exercises: [{
        
        type: {type: String, required: 'Please enter an exercise type.'},

        name: {type: String, required: 'Please enter an exercise name.'},

        duration: {type: Number, required: 'Please enter a duration.'},

        weigth: {type: Number, required: 'Please enter a weight.'},

        reps: {type: Number, required: 'Please enter the number of reps.'},

        sets: {type: Number, required: 'Please enter the number of sets.'}

    }]
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;