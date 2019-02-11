import mongoose from 'mongoose';


const CountrySchema = mongoose.Schema({
    name: String,
    capital: String,
    currency: String
}, {
        timestamps: true
    });

module.exports = mongoose.model('Country', CountrySchema);