import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  description: {
    type: String,
    require: [true, 'Please add a description'],
  },
  dimension: {
    type: Object,
    require: [true, 'Please add dimension'],
  },
  rating: {
    type: Object,
    require: [true, 'Please add rating'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: { type: String, require: [true, 'Please enter name'] },
  age: { type: Number, require: [true, 'Please enter age'] },
  weight: { type: Number, require: [true, 'Please enter weight'] },
  height: { type: String, require: [true, 'Please enter height'] },
  skill: { type: String, require: [true, 'Please enter skill'] },
  image: String,
  surfboard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Surfboard',
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
});

const ReviewModel =
  mongoose.models.Review || mongoose.model('Review', ReviewSchema);

export default ReviewModel;
