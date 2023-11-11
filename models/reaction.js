const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
    {

        reactionId: {
            type: Schema.Types.ObjectId,
            default: function () {
                return new mongoose.Types.ObjectId()
            },
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        userName: {
            type: String,
            required: true,
            createdAt: {
                type: Date,
                default: Date.now
            },
        },

    }
);

module.exports = reactionSchema;