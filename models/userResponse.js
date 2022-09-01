const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: { type: String, 
        },
  user: {   type: Schema.Types.ObjectId, 
            ref: 'User',
        },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
  });

const ratingSchema = new Schema({
  rating: { type: Number, 
            min: 1, 
            max: 5, 
            default: 5},
  user: {   type: Schema.Types.ObjectId, 
            ref: 'User',
        },
  userName: String,
  userAvatar: String
});

const responseSchema = new Schema ({
  content: String, //the url of the image response
  caption: String,
  request: {type: Schema.Types.ObjectId, ref: "requests"},
  comments: [commentSchema],
  ratings: [ratingSchema],
  user: {   type: Schema.Types.ObjectId, 
    ref: 'User'},
  userName: String,
  userAvatar: String,
})

module.exports = mongoose.model('Response', responseSchema);