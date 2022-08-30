const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      unique: true
      // temporarily commenting out for functionality. will implement as a separate shema
      // type: Schema.Types.ObjectId,
      // ref: 'Category',
      // required: true
    },
    response: [{
      type:Schema.Types.ObjectId,
      ref: 'userResponse'
    }]
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Request', requestSchema);