const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const activitySchema = new mongoose.Schema({
    lastLogin: {
        type: Date,
        required: true
    }
}); 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles :{
        type: [String],
        default: ['user', 'admin']
    },
    profile: profileSchema,
    activity: activitySchema

});

const user= mongoose.model('User', userSchema);

module.exports = user;