const { Schema, model } = require('mongoose');
const validator = require('validator');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max_length: 50,
            validate: {
                validator: (value) => {
                    return validator.isEmail(value);
                },
                message: (props) => `${props.value} is not a valid email!`,
            },
        },
        friends: [friendsSchema],
        thoughts: [assignmentSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', userSchema); // might move to routes later 

module.exports = User;
