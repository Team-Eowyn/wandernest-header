const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wandernest-header', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const { Schema } = mongoose;
const { model } = mongoose;

const hotelSchema = Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String
});

const Hotel = model('Hotel', hotelSchema);
module.exports = Hotel;


