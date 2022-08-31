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
      // temporarily commenting out for functionality. looking to implement as a separate schema in icebox
      // type: Schema.Types.ObjectId,
      // ref: 'Category',
      // required: true
    },
    response: [{
      type:Schema.Types.ObjectId,
      ref: 'userResponse'
    }],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Request', requestSchema);