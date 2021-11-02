const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
    {
        time: {
            type: Number,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        date: {
            type: Schema.Types.Date
        }
    },
    { timestamptz: true }
);

module.exports = mongoose.model('Booking', bookingSchema);